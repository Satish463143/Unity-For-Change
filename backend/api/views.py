from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.db.models import Sum,Count
# Restframework
from rest_framework import status
from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.viewsets import ModelViewSet

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from datetime import datetime

# Others
import json
import random

# Custom Imports
from .models import (
    HomeBanner,
    WhatWeOffer,
    GetInvolved,
    WhoWeAre,
    HowItStarted,
    HowItsGoing,
    OurValues,
    OurTeam,
    WhatWeDo,
    Activity,
    Gallery,
    ContactUs,
    Resource,
    Sponsor,
)
from .serializers import (
    HomeBannerSerializer,
    WhatWeOfferSerializer,
    GetInvolvedSerializer,
    WhoWeAreSerializer,
    HowItStartedSerializer,
    HowItsGoingSerializer,
    OurValuesSerializer,
    OurTeamSerializer,
    WhatWeDoSerializer,
    ActivitySerializer,
    GallerySerializer,
    ContactUsSerializer,
    ResourceSerializer,
    SponsorSerializer,
)

class HomeBannerAPIView(generics.ListAPIView):
    serializer_class = HomeBannerSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return HomeBanner.objects.all()

class WhatWeOfferAPIView(generics.ListAPIView):
    serializer_class = WhatWeOfferSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return WhatWeOffer.objects.all()
    
class GetInvolvedAPIView(generics.ListAPIView):
    serializer_class = GetInvolvedSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return GetInvolved.objects.all()

class WhoWeAreAPIView(generics.ListAPIView):
    serializer_class = WhoWeAreSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return WhoWeAre.objects.all()   

class HowItStartedAPIView(generics.ListAPIView):
    serializer_class = HowItStartedSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return HowItStarted.objects.all()

class HowItsGoingAPIView(generics.ListAPIView):
    serializer_class = HowItsGoingSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return HowItsGoing.objects.all()
    
class OurValuesAPIView(generics.ListAPIView):
    serializer_class = OurValuesSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return OurValues.objects.all()

class OurTeamAPIView(generics.ListAPIView):
    serializer_class = OurTeamSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return OurTeam.objects.all()

class WhatWeDoAPIView(generics.ListAPIView):
    serializer_class = WhatWeDoSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return WhatWeDo.objects.all()

class ActivityAPIView(ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    
class GalleryAPIView(generics.ListAPIView):
    serializer_class = GallerySerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Gallery.objects.all()

class ContactUsAPIView(generics.ListAPIView):
    serializer_class = ContactUsSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return ContactUs.objects.all()

class ContactUsPostAPIView(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'full_name': openapi.Schema(type=openapi.TYPE_STRING),
                'email': openapi.Schema(type=openapi.TYPE_STRING),
                'number': openapi.Schema(type=openapi.TYPE_STRING),
                'message': openapi.Schema(type=openapi.TYPE_STRING),
            },
        ),
    )
    def post(self, request):
        # Get data from request.data (frontend)
        full_name = request.data['full_name']
        email = request.data['email']
        number = request.data['number']
        message= request.data['message']

        # Notification
        ContactUs.objects.create(
            full_name=full_name,
            email=email,
            number=number,
            message=message
        )

        # Return response back to the frontend
        return Response({"message": "Message sent"}, status=status.HTTP_201_CREATED)

class ResourceAPIView(generics.ListAPIView):
    serializer_class = ResourceSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Resource.objects.all()

class SponsorAPIView(generics.ListAPIView):
    serializer_class = SponsorSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Sponsor.objects.all()
    

