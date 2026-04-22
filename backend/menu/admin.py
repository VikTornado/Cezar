from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Dish, DishImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'order', 'image_preview']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit:cover; border-radius:4px;" />', obj.image.url)
        return "Немає фото"
    image_preview.short_description = "Фото"

class DishImageInline(admin.TabularInline):
    model = DishImage
    extra = 1

@admin.register(Dish)
class DishAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'price', 'is_popular', 'is_available', 'image_preview']
    list_filter = ['category', 'is_popular', 'is_available']
    search_fields = ['title', 'description']
    inlines = [DishImageInline]

    def image_preview(self, obj):
        if obj.main_image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit:cover; border-radius:4px;" />', obj.main_image.url)
        return "Немає фото"
    image_preview.short_description = "Головне фото"
