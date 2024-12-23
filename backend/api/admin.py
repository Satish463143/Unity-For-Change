from django.contrib import admin

# Register your models here.
from api import models as api_models

from django.contrib import admin
from django.core.files.storage import default_storage
from .forms import ActivityAdminForm

from django.contrib import admin
from django.core.files.storage import default_storage
from .forms import ActivityAdminForm

class ActivityAdmin(admin.ModelAdmin):
    form = ActivityAdminForm  # Link the custom form

    def formfield_for_dbfield(self, db_field, request, **kwargs):
        if db_field.name == "images":
            # Hide the JSONField in the admin panel
            return None
        return super().formfield_for_dbfield(db_field, request, **kwargs)
    
# Register the model with the customized admin panel
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
