from rest_framework import serializers
from .models import Cart, CartItem
from products.models import Variant


class CartItemSerializer(serializers.ModelSerializer):
    variant_name = serializers.CharField(source="variant.product.name", read_only=True)
    price = serializers.DecimalField(source="variant.price", max_digits=8, decimal_places=2, read_only=True)

    class Meta:
        model = CartItem
        fields = ["id", "variant", "variant_name", "price", "quantity"]


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    total = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ["id", "items", "total"]

    def get_total(self, obj):
        return sum(item.variant.price * item.quantity for item in obj.items.all())
