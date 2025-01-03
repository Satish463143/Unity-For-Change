# Generated by Django 4.2 on 2024-12-24 14:35

import api.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('subtitle', models.CharField(max_length=500)),
                ('description', models.TextField()),
                ('thumbnail_image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('date', models.DateField()),
                ('location', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('number', models.CharField(max_length=15)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
            ],
        ),
        migrations.CreateModel(
            name='GetInvolved',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('title', models.CharField(max_length=255)),
                ('subtitle', models.CharField(max_length=500)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='HomeBanner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('title', models.CharField(max_length=255)),
                ('subtitle', models.CharField(max_length=500)),
                ('mobileImage', models.ImageField(upload_to=api.models.upload_to_unique)),
            ],
        ),
        migrations.CreateModel(
            name='HowItsGoing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='HowItStarted',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='OurTeam',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('name', models.CharField(max_length=255)),
                ('designation', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='OurValues',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('heading', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('pdf', models.FileField(upload_to=api.models.upload_to_unique)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Sponsor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
            ],
        ),
        migrations.CreateModel(
            name='WhatWeDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='WhatWeOffer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
            ],
        ),
        migrations.CreateModel(
            name='WhoWeAre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='ActivityImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=api.models.upload_to_unique)),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='api.activity')),
            ],
        ),
    ]
