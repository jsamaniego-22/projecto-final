from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import CartItemViewSet
from . import views

router = DefaultRouter()
router.register(r'cart', CartItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cart/', views.CartPageView.as_view(), name='cart'),  # Ruta para la vista del carrito
    path('products/', views.ProductListView.as_view(), name='product-list'),
]
