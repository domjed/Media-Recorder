import os
from django.db import models
from django.utils import timezone


def upload_to(self, filename):
    """upload files to appropriate directory"""
    now = timezone.now()
    base, extension = os.path.splitext(filename.lower())
    milliseconds = now.microsecond // 1000
    return f"{now:%Y-%m-%d/%H_%M_%S}_{milliseconds}{extension}"


class Recordings(models.Model):
    """
    Class representing recordings stored in database
    """

    recording_save_date = models.DateTimeField(auto_now_add=True)
    recording_audio_path = models.FileField(upload_to=upload_to)
