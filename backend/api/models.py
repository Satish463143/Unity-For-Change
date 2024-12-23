from django.db import models
from ckeditor.fields import RichTextField  # Assuming you're using CKEditor for rich text support
import os
import uuid
from django import forms


def upload_to_unique(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4().hex}.{ext}"
    return os.path.join(instance.__class__.__name__.lower(), filename)

class HomeBanner(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    mobileImage = models.ImageField(upload_to=upload_to_unique)

    def __str__(self):
        return self.title

class WhatWeOffer(models.Model):
    heading = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to=upload_to_unique)

    def __str__(self):
        return self.heading

class GetInvolved(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title

class WhoWeAre(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = models.TextField()

class HowItStarted(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = models.TextField()

class HowItsGoing(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = models.TextField()

class OurValues(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    heading = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.heading

class OurTeam(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name

class WhatWeDo(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title

class Activity(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    description = models.TextField()  # Or RichTextField
    images = models.ImageField(upload_to=upload_to_unique)
    thumbnail_image = models.ImageField(upload_to='thumbnails/', blank=True, null=True)
    date = models.DateField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Gallery(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)

class ContactUs(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    number = models.CharField(max_length=15)
    message = models.TextField()

    def __str__(self):
        return self.full_name

class Resource(models.Model):
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to=upload_to_unique)
    description = models.TextField()

    def __str__(self):
        return self.name

class Sponsor(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to=upload_to_unique)

    def __str__(self):
        return self.name
