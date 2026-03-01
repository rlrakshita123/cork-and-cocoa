from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Order, OrderItem
from cart.models import CartItem
from cart.views import get_cart


class CreateOrderView(APIView):
    def post(self, request):
        cart = get_cart(request)
        items = cart.items.all()

        if not items:
            return Response({"error": "Cart is empty"}, status=400)

        address_id = request.data.get("address_id")

        address = None
        if address_id:
            from users.models import Address
            address = Address.objects.get(id=address_id)

        total = sum(item.variant.price * item.quantity for item in items)

        order = Order.objects.create(
            user=request.user if request.user.is_authenticated else None,
            address=address,
            total_amount=total
        )

        for item in items:
            OrderItem.objects.create(
                order=order,
                product_name=item.variant.product.name,
                variant_info=item.variant.label,
                price=item.variant.price,
                quantity=item.quantity
            )

        items.delete()

        return Response({
            "message": "Order created successfully",
            "order_id": order.id,
            "total": total
        })

class OrderListView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({"error": "Login required"}, status=401)

        orders = Order.objects.filter(user=request.user)

        data = []
        for order in orders:
            data.append({
                "id": order.id,
                "total": order.total_amount,
                "status": order.status,
                "created_at": order.created_at
            })

        return Response(data)
