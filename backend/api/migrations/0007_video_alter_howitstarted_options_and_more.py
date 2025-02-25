# Generated by Django 5.1.4 on 2025-01-11 15:58

import api.models
import django_ckeditor_5.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_getinvolved_date_alter_getinvolved_time_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('youtubeLink', models.CharField(max_length=500)),
            ],
            options={
                'verbose_name_plural': 'Youtube Videos',
            },
        ),
        migrations.AlterModelOptions(
            name='howitstarted',
            options={'verbose_name_plural': 'Our story'},
        ),
        migrations.AlterModelOptions(
            name='sponsor',
            options={'verbose_name_plural': 'Partners'},
        ),
        migrations.RenameField(
            model_name='howitstarted',
            old_name='description',
            new_name='first_description',
        ),
        migrations.RenameField(
            model_name='howitstarted',
            old_name='image',
            new_name='first_image',
        ),
        migrations.RemoveField(
            model_name='getinvolved',
            name='subtitle',
        ),
        migrations.AddField(
            model_name='getinvolved',
            name='description',
            field=django_ckeditor_5.fields.CKEditor5Field(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='getinvolved',
            name='location',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='howitstarted',
            name='second_description',
            field=django_ckeditor_5.fields.CKEditor5Field(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='howitstarted',
            name='second_image',
            field=models.ImageField(default='', upload_to=api.models.upload_to_unique),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='howitstarted',
            name='third_description',
            field=django_ckeditor_5.fields.CKEditor5Field(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='howitstarted',
            name='third_image',
            field=models.ImageField(default='', upload_to=api.models.upload_to_unique),
            preserve_default=False,
        ),
    ]
