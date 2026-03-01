"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from products.views import ProductViewSet, CategoryViewSet
from cart.views import CartView, AddToCartView, UpdateCartView, RemoveFromCartView
from orders.views import CreateOrderView, OrderListView
from payments.views import CreatePaymentView, VerifyPaymentView


router = DefaultRouter()
router.register('products', ProductViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),

    path('api/cart/', CartView.as_view()),
    path('api/cart/add/', AddToCartView.as_view()),
    path('api/cart/update/', UpdateCartView.as_view()),
    path('api/cart/remove/<int:item_id>/', RemoveFromCartView.as_view()),
    path('api/orders/create/', CreateOrderView.as_view()),
    path('api/orders/', OrderListView.as_view()),
    path('api/payments/create/', CreatePaymentView.as_view()),
    path('api/payments/verify/', VerifyPaymentView.as_view()),
]


