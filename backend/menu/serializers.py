from rest_framework import serializers
from .models import Category, Dish, DishImage, HeroBanner, GalleryImage

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'image', 'caption', 'order']

class HeroBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroBanner
        fields = ['id', 'title', 'subtitle', 'image', 'is_active']

class DishImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishImage
        fields = ['id', 'image']

class DishSerializer(serializers.ModelSerializer):
    images = DishImageSerializer(many=True, read_only=True)
    category_slug = serializers.CharField(source='category.slug', read_only=True)

    class Meta:
        model = Dish
        fields = ['id', 'title', 'category', 'category_slug', 'description', 'price', 'weight', 'calories', 'ingredients', 'main_image', 'is_popular', 'is_available', 'images']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'image', 'description', 'order']
