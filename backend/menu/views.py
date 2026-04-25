from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Category, Dish, HeroBanner, GalleryImage
from .serializers import CategorySerializer, DishSerializer, HeroBannerSerializer, GalleryImageSerializer

class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.filter(is_visible=True)
    serializer_class = GalleryImageSerializer
    permission_classes = [AllowAny]

class HeroBannerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroBanner.objects.filter(is_active=True)
    serializer_class = HeroBannerSerializer
    permission_classes = [AllowAny]

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]

class DishViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Dish.objects.filter(is_available=True)
    serializer_class = DishSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        category_slug = self.request.query_params.get('category')
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        return queryset
