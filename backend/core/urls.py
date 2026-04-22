from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from rest_framework.decorators import api_view
from rest_framework.response import Response

from menu.views import CategoryViewSet, DishViewSet
from corporate.views import CorporateServiceViewSet
from contact.views import ContactRequestViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'dishes', DishViewSet)
router.register(r'corporate', CorporateServiceViewSet)
router.register(r'contact', ContactRequestViewSet, basename='contact')

@api_view(['GET'])
def check_auth(request):
    return Response({
        'is_authenticated': request.user.is_authenticated,
        'is_superuser': request.user.is_superuser
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/check/', check_auth, name='check_auth'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
