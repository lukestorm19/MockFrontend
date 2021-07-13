from django.shortcuts import render
from Filters.models import FilterData
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from Filters.models import FilterData
from Filters.serializers import FilterDataSerializer

# Create your views here.
# Create your views here.




@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'getFilteredRecords': '/getFilteredRecords/',
       
    }

    return Response(api_urls)


@api_view(['GET'])
def getFilteredRecords(request):
    records = FilterData.objects.all()
    serializer = FilterDataSerializer(records, many=True)
    return Response(serializer.data)
