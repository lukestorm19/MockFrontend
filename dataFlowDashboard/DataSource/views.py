from django.shortcuts import render
from DataSource.models import ExceptionType
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from DataSource.models import ExceptionType, RD_BOOK, ER_LEGAL_ENTITY, ER_ACCOUNT, SD_FEED_VALIDATION, SD_AMOUNT_TYPE,FilterTable
from DataSource.serializers import ExceptionType, RD_BOOKSerializer, ER_LEGAL_ENTITYSerializer, ER_ACCOUNTSerializer, SD_FEED_VALIDATIONSerializer, SD_AMOUNT_TYPESerializer,FilterTableSerializer

# Create your views here.
# Create your views here.




@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'getProcessedRecords': '/getProcessedRecords/',
       
    }

    return Response(api_urls)


@api_view(['GET'])
def getProcessedRecords(request):
    records = FilterTable.objects.all()
    serializer = FilterTableSerializer(records, many=True)
    return Response(serializer.data)
