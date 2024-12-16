from rest_framework import serializers
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

class HomeBannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeBanner
        fields = '__all__'

class WhatWeOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatWeOffer
        fields = '__all__'

class GetInvolvedSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetInvolved
        fields = '__all__'

class WhoWeAreSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhoWeAre
        fields = '__all__'

class HowItStartedSerializer(serializers.ModelSerializer):
    class Meta:
        model = HowItStarted
        fields = '__all__'

class HowItsGoingSerializer(serializers.ModelSerializer):
    class Meta:
        model = HowItsGoing
        fields = '__all__'

class OurValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurValues
        fields = '__all__'

class OurTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurTeam
        fields = '__all__'

class WhatWeDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = WhatWeDo
        fields = '__all__'

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'

class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUs
        fields = '__all__'

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'

class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'
