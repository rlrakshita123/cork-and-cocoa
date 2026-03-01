from django.db import models
from users.models import User, Address

class Order(models.Model):
    STATUS = [
        ('Pending','Pending'),
        ('Paid','Paid'),
        ('Preparing','Preparing'),
        ('Delivered','Delivered'),
        ('Cancelled','Cancelled')
    ]

    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    address = models.ForeignKey(Address, null=True, on_delete=models.SET_NULL)

    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(choices=STATUS, max_length=20, default='Pending')

    created_at = models.DateTimeField(auto_now_add=True)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")

    product_name = models.CharField(max_length=150)
    variant_info = models.CharField(max_length=150)

    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.IntegerField()
