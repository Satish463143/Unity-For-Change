# Generated by Django 4.2 on 2024-12-23 15:07

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_activity_images'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='images',
            field=models.ImageField(default='', upload_to=api.models.upload_to_unique),
            preserve_default=False,
        ),
    ]
