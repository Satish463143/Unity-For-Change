from django.urls import path
from api import views as api_views

urlpatterns = [
    # Userauths API Endpoints
    path('home-banner/', api_views.HomeBannerAPIView.as_view()),
    path('what-we-offer/', api_views.WhatWeOfferAPIView.as_view()),
    path('get-involved/', api_views.GetInvolvedAPIView.as_view()),
    path('who-we-are/', api_views.WhoWeAreAPIView.as_view()),
    path('how-it-started/', api_views.HowItStartedAPIView.as_view()),
    path('how-its-going/', api_views.HowItsGoingAPIView.as_view()),
    path('our-values/', api_views.OurValuesAPIView.as_view()),
    path('our-team/', api_views.OurTeamAPIView.as_view()),
    path('what-we-do/', api_views.WhatWeDoAPIView.as_view()),
    path('activity/', api_views.ActivityAPIView.as_view({'get': 'list'})),
    path('gallery/', api_views.GalleryAPIView.as_view()),
    path('contact-us/', api_views.ContactUsPostAPIView.as_view()),
    path('get-contact-us/', api_views.ContactUsAPIView.as_view()),
    path('resources/', api_views.ResourceAPIView.as_view()),
    path('sponsors/', api_views.SponsorAPIView.as_view()),
]