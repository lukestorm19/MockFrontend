from django.shortcuts import render
from Exceptions.models import ExceptionType
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from Exceptions.models import ExceptionType
from Exceptions.serializers import ExceptionTypeSerializer

# Create your views here.
# Create your views here.
# PICKLE CODE
import pickle
import datetime 
data =list(ExceptionType.objects.filter(exception_COBDT__gte=datetime.date.today()).values())
# file=JsonResponse(data,safe = False)
pickle_out=open("data.pickle","wb")
pickle.dump(data,pickle_out)
pickle_out.close()

# END



@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'getProcessedRecords': '/getProcessedRecords/',
       
    }

    return Response(api_urls)


@api_view(['GET'])
def getProcessedRecords(request):
    records = ExceptionType.objects.all()
    serializer = ExceptionTypeSerializer(records, many=True)
    return Response(serializer.data)
"""
@api_view(['GET'])
def getProcessedRecords(request, businessLine, region):
    records = ExceptionType.objects.all()
    serializer = ExceptionTypeSerializer(records, many=True)
    return Response(serializer.data)
"""
  # urls 