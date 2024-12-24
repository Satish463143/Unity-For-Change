from api import models as api_models
from django.contrib import admin

class ActivityImagesInline(admin.StackedInline):  # Use StackedInline for same-page display
    model = api_models.ActivityImages
    extra = 0  # Number of extra empty forms for images
    fields = ('image', )  # Show only the image field for simplicity

@admin.register(api_models.Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'location')
    inlines = [ActivityImagesInline]  # Add the inline form

# Custom admin for ContactUs to display all fields
@admin.register(api_models.ContactUs)
class ContactUsAdmin(admin.ModelAdmin):
    list_display = ('full_name','email','number','message')

admin.site.register(api_models.HomeBanner)
admin.site.register(api_models.WhatWeOffer)
admin.site.register(api_models.GetInvolved)
admin.site.register(api_models.WhoWeAre)
admin.site.register(api_models.HowItStarted)
admin.site.register(api_models.HowItsGoing)
admin.site.register(api_models.OurValues)
admin.site.register(api_models.OurTeam)
# admin.site.register(api_models.Activity)
admin.site.register(api_models.WhatWeDo)
admin.site.register(api_models.Gallery)
admin.site.register(api_models.Resource)
admin.site.register(api_models.Sponsor)
