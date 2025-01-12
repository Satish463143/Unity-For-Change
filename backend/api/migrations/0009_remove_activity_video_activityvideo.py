# Generated by Django 5.1.4 on 2025-01-12 07:55

import cloudinary.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_activity_video'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='video',
        ),
        migrations.CreateModel(
            name='ActivityVideo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='video')),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videos', to='api.activity')),
            ],
        ),
    ]
