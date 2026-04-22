from rest_framework import serializers
from .models import CorporateService

class CorporateServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateService
        fields = ['id', 'title', 'description', 'image', 'is_active']
