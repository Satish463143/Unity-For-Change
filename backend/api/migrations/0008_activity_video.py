# Generated by Django 5.1.4 on 2025-01-12 07:40

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_video_alter_howitstarted_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='video',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='video'),
        ),
    ]
