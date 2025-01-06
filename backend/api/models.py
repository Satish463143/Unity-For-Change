from django.db import models
import os
import uuid
from django_ckeditor_5.fields import CKEditor5Field

def upload_to_unique(instance, filename):
    ext = filename.split('.')[-1]
    filename = f"{uuid.uuid4().hex}.{ext}"
    return os.path.join(instance.__class__.__name__.lower(), filename)

class HomeBanner(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    mobileImage = models.ImageField(upload_to=upload_to_unique)

    class Meta:
        verbose_name_plural = "Home Banner"

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

    class Meta:
        verbose_name_plural = "Get Involved"

    def __str__(self):
        return self.title

class WhoWeAre(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "Who We Are"

class HowItStarted(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = CKEditor5Field(config_name='default')

    class Meta:
        verbose_name_plural = "Our Story"

class HowItsGoing(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "How Its Going"

class OurValues(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    heading = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "Our Values"

    def __str__(self):
        return self.heading

class OurTeam(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name_plural = "Our Team"

    def __str__(self):
        return self.name

class WhatWeDo(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)
    title = models.CharField(max_length=255)
    description = CKEditor5Field(config_name='default')

    class Meta:
        verbose_name_plural = "Thematic Areas"

    def __str__(self):
        return self.title

class Activity(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=500)
    description=CKEditor5Field(config_name='default')
    thumbnail_image = models.ImageField(upload_to=upload_to_unique)
    date = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name_plural = "Activities"

    def __str__(self):
        return self.title

class ActivityImages(models.Model):
    activity = models.ForeignKey(Activity, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_to_unique)

    def __str__(self):
        return f"Image for {self.activity.title}"

class Gallery(models.Model):
    image = models.ImageField(upload_to=upload_to_unique)

    class Meta:
        verbose_name_plural = "Gallery Images"

class ContactUs(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    number = models.CharField(max_length=15)
    message = models.TextField()

    class Meta:
        verbose_name_plural = "Inquiries"

    def __str__(self):
        return self.full_name

class Resource(models.Model):
    name = models.CharField(max_length=255)
    pdf = models.FileField(upload_to=upload_to_unique)
    description = models.TextField()

    def __str__(self):
        return self.name

class Sponsor(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to=upload_to_unique)

    def __str__(self):
        return self.name
