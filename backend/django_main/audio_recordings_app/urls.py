"""
Urls of audio_recordings_app
"""
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from audio_recordings_app import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register("recordings", views.RecordingsViewSet)


urlpatterns = [
    path("", include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
