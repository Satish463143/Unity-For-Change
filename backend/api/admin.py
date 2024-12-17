from django.contrib import admin

# Register your models here.
from api import models as api_models

admin.site.register(api_models.HomeBanner)
admin.site.register(api_models.WhatWeOffer)
admin.site.register(api_models.GetInvolved)
admin.site.register(api_models.WhoWeAre)
admin.site.register(api_models.HowItStarted)
admin.site.register(api_models.HowItsGoing)
admin.site.register(api_models.OurValues)
admin.site.register(api_models.OurTeam)
admin.site.register(api_models.WhatWeDo)
admin.site.register(api_models.Activity)
admin.site.register(api_models.Gallery)
admin.site.register(api_models.ContactUs)
admin.site.register(api_models.Resource)
admin.site.register(api_models.Sponsor)
