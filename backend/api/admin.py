from django.contrib import admin

# Register your models here.
from api import models as api_models

from django.contrib import admin
from django.core.files.storage import default_storage
from .forms import ActivityAdminForm

class ActivityAdmin(admin.ModelAdmin):
    form = ActivityAdminForm  # Use the custom form

    def save_model(self, request, obj, form, change):
        # Handle the custom multi-upload field
        uploaded_files = request.FILES.getlist('image_files')  # Matches the form field name
        image_paths = obj.images or []  # Get existing images or an empty list

        for file in uploaded_files:
            file_path = default_storage.save(f'uploads/{file.name}', file)
            image_paths.append(file_path)

        obj.images = image_paths  # Update the JSONField with the new file paths
        super().save_model(request, obj, form, change)

# Register the model and the customized admin class
admin.site.register(api_models.Activity, ActivityAdmin)

admin.site.register(api_models.HomeBanner)
admin.site.register(api_models.WhatWeOffer)
admin.site.register(api_models.GetInvolved)
admin.site.register(api_models.WhoWeAre)
admin.site.register(api_models.HowItStarted)
admin.site.register(api_models.HowItsGoing)
admin.site.register(api_models.OurValues)
admin.site.register(api_models.OurTeam)
admin.site.register(api_models.WhatWeDo)
admin.site.register(api_models.Gallery)
admin.site.register(api_models.ContactUs)
admin.site.register(api_models.Resource)
admin.site.register(api_models.Sponsor)
