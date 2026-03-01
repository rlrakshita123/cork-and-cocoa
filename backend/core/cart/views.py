from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Cart, CartItem
from products.models import Variant
from .serializers import CartSerializer


def get_cart(request):
    if request.user.is_authenticated:
        cart, _ = Cart.objects.get_or_create(user=request.user)
    else:
        session_id = request.session.session_key
        if not session_id:
            request.session.create()
        cart, _ = Cart.objects.get_or_create(session_id=request.session.session_key)
    return cart


class CartView(APIView):
    def get(self, request):
        cart = get_cart(request)
        serializer = CartSerializer(cart)
        return Response(serializer.data)


class AddToCartView(APIView):
    def post(self, request):
        cart = get_cart(request)

        variant_id = request.data.get("variant_id")
        quantity = int(request.data.get("quantity", 1))

        variant = Variant.objects.get(id=variant_id)

        item, created = CartItem.objects.get_or_create(
            cart=cart,
            variant=variant,
            defaults={"quantity": quantity}
        )

        if not created:
            item.quantity += quantity
            item.save()

        return Response({"message": "Item added to cart"})


class UpdateCartView(APIView):
    def put(self, request):
        item_id = request.data.get("item_id")
        quantity = int(request.data.get("quantity"))

        item = CartItem.objects.get(id=item_id)
        item.quantity = quantity
        item.save()

        return Response({"message": "Cart updated"})


class RemoveFromCartView(APIView):
    def delete(self, request, item_id):
        cart = get_cart(request)

        CartItem.objects.filter(cart=cart, id=item_id).delete()

        return Response({"message": "Item removed successfully"})


