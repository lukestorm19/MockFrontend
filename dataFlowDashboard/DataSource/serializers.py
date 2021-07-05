from rest_framework import serializers
from .models import ExceptionType, RD_BOOK, ER_LEGAL_ENTITY, ER_ACCOUNT, SD_FEED_VALIDATION, SD_AMOUNT_TYPE,FilterTable


class RD_BOOKSerializer(serializers.ModelSerializer):
    class Meta:
    
        model = RD_BOOK
        fields = '__all__'


class ER_LEGAL_ENTITYSerializer(serializers.ModelSerializer):
    class Meta:
        model = ER_LEGAL_ENTITY
        fields = '__all__'



class ER_ACCOUNTSerializer(serializers.ModelSerializer):
    class Meta:
        model = ER_ACCOUNT
        fields = '__all__'


class SD_FEED_VALIDATIONSerializer(serializers.ModelSerializer):
    class Meta:
        model = SD_FEED_VALIDATION
        fields = '__all__'






class SD_AMOUNT_TYPESerializer(serializers.ModelSerializer):
    class Meta:
        model = SD_AMOUNT_TYPE
        fields = '__all__'


class FilterTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilterTable
        fields = '__all__'
