"""
Views of audio_recordings_app
"""

from audio_recordings_app.models import Recordings
from audio_recordings_app.serializers import RecordingsSerializer
from rest_framework.parsers import MultiPartParser, FormParser

from rest_framework import viewsets


class RecordingsViewSet(viewsets.ModelViewSet):
    """class for audio_recordings_app views"""

    queryset = Recordings.objects.all()
    serializer_class = RecordingsSerializer
    parser_classes = [MultiPartParser, FormParser]
