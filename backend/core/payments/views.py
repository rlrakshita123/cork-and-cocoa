from django.shortcuts import render
import razorpay
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Payment
from orders.models import Order


client = razorpay.Client(
    auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET)
)


class CreatePaymentView(APIView):
    def post(self, request):
        order_id = request.data.get("order_id")

        order = Order.objects.get(id=order_id)

        razorpay_order = client.order.create({
            "amount": int(order.total_amount * 100),  # paise
            "currency": "INR",
            "payment_capture": 1
        })

        Payment.objects.create(
            order=order,
            razorpay_order_id=razorpay_order["id"],
            status="created"
        )

        return Response({
            "razorpay_order_id": razorpay_order["id"],
            "amount": razorpay_order["amount"],
            "key": settings.RAZORPAY_KEY_ID
        })


class VerifyPaymentView(APIView):
    def post(self, request):
        razorpay_order_id = request.data.get("razorpay_order_id")
        razorpay_payment_id = request.data.get("razorpay_payment_id")
        razorpay_signature = request.data.get("razorpay_signature")

        try:
            client.utility.verify_payment_signature({
                'razorpay_order_id': razorpay_order_id,
                'razorpay_payment_id': razorpay_payment_id,
                'razorpay_signature': razorpay_signature
            })

            payment = Payment.objects.get(razorpay_order_id=razorpay_order_id)
            payment.razorpay_payment_id = razorpay_payment_id
            payment.status = "paid"
            payment.save()

            order = payment.order
            order.status = "Paid"
            order.save()

            return Response({"message": "Payment successful"})

        except:
            return Response({"error": "Payment verification failed"}, status=400)
