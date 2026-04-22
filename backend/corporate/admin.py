from django.contrib import admin
from django.utils.html import format_html
from .models import CorporateService

@admin.register(CorporateService)
class CorporateServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'image_preview']
    list_filter = ['is_active']
    search_fields = ['title', 'description']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" style="border-radius:4px;" />', obj.image.url)
        return "Немає фото"
    image_preview.short_description = "Фото"
