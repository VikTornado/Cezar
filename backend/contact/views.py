from rest_framework import viewsets, mixins
from rest_framework.permissions import AllowAny
from .models import ContactRequest
from .serializers import ContactRequestSerializer

class ContactRequestViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer
    permission_classes = [AllowAny]
