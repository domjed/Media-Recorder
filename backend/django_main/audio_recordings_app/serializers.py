from audio_recordings_app.models import Recordings
from rest_framework import serializers


class RecordingsSerializer(serializers.ModelSerializer):
    "Serializer of recordings (datetime of save, audio path)"

    class Meta:
        model = Recordings
        fields = (
            "recording_save_date",
            "recording_audio_path",
        )
