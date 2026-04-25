from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Dish, DishImage, HeroBanner, GalleryImage

@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['image_preview', 'caption', 'order', 'is_visible']
    list_editable = ['order', 'is_visible']
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="60" style="object-fit:cover; border-radius:4px;" />', obj.image.url)
        return "Немає фото"
    image_preview.short_description = "Мініатюра"

@admin.register(HeroBanner)
class HeroBannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'subtitle', 'is_active', 'image_preview']
    list_editable = ['is_active']
    
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="40" style="object-fit:cover; border-radius:4px;" />', obj.image.url)
        return "Немає фото"
    image_preview.short_description = "Банер"

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
    search_fields = ['title', 'description', 'ingredients']
    inlines = [DishImageInline]
    
    fieldsets = (
        ('Основна інформація', {
            'fields': ('title', 'category', 'price', 'description')
        }),
        ('Деталі страви', {
            'fields': ('weight', 'calories', 'ingredients')
        }),
        ('Зображення та Статус', {
            'fields': ('main_image', 'is_popular', 'is_available')
        }),
    )

    def image_preview(self, obj):
        if obj.main_image:
            return format_html('<img src="{}" width="50" height="50" style="object-fit:cover; border-radius:4px;" />', obj.main_image.url)
        return "Немає фото"
    image_preview.short_description = "Головне фото"
