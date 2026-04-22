from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import CorporateService
from .serializers import CorporateServiceSerializer

class CorporateServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CorporateService.objects.filter(is_active=True)
    serializer_class = CorporateServiceSerializer
    permission_classes = [AllowAny]
