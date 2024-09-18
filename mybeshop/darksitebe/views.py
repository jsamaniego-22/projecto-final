from rest_framework import viewsets
from .models import CartItem
from .serializers import CartItemSerializer

from django.views.generic import TemplateView

class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

class CartPageView(TemplateView):
    template_name = 'cart.html'
