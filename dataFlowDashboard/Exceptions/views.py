from django.shortcuts import render
from Exceptions.models import ExceptionType
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from Exceptions.models import ExceptionType
from Exceptions.serializers import ExceptionTypeSerializer
from TAI.views import insert_data_exceptionTable
from Filters.views import insert_data_filterTable
import os
import tarfile
#POST REQUEST TAI AND FILTER
def readFile(path,filename, isXML = False):
#  reading the file
    # print("Reading", path)
    # BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # print(BASE_DIR)
    # tar = tarfile.open(os.path.join(BASE_DIR, path))

    # f = tar.extractfile(filename)
    # print(f)
    # import json
    # import xmltodict
    # if ".xml" in filename :
    # # if(isXML):
    #     print(f)
    #     with open("data.xml") as xml_file:
    #         data_dict1 = xmltodict.parse(xml_file.read())
    #     xml_file.close()
    #     data_dict={}
    #     for key, val in data_dict1.keys():
    #         data_dict[key] = val

    # else:
    #     data_dict = [json.loads(f.read())]
    #     print(data_dict)
    #     print(path)
        # print("**********************")
    if "Filter" in path:
        data_dict = {}
        insert_data_filterTable(data_dict)
    else :
        data_dict = {}
        insert_data_exceptionTable(data_dict)    
 
    # if(cache.get('data_dict')==None):
    #     cache.set('data_dict', data_dict)
    # else:
    #     data_dict.extend(cache.get('data_dict'))
    #     cache.set('data_dict', data_dict)
    # # cache.get('data_dict').append(result)

    # print("The cache is updated")
    # print("Cache data:")
    # print(cache.get('data_dict'))
    # print(path)
    # print("The data has been inserted")
    # return HttpResponse(path)





from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser   
from rest_framework.decorators import parser_classes
from rest_framework_xml.parsers import XMLParser
from Exceptions import tasks
@api_view(['POST'])
@parser_classes((XMLParser,))   
def fileIsReady(request):
    xml  = request.data
    print(xml)
    loc = xml['feed_meta_data']['remote_data']['transport']['location']
    # print(XMLParser().parse(request))
    print(loc)
    # call the task
    # fileName = "data.xml"
    tasks.insert_db_task(loc, filename="849efce063e40d8010a1747bba3264fa.json")
    # readFile(loc)
    # var = parse(request)
    return HttpResponse("File is inserted")
    # return HttpResponse(XMLParser().parse(request))
    # return HttpResponse(XMLParser().parse(request)['feed_meta_data']['remote_data']['location'])
    # print(var)
    # print(var['feed_meta_data']['remote_data']['location'])

    # print(request.POST)
    # return Response(var)
    #     {
    # location:"jsono1.tar.gz"
    # }




from django.core.cache import cache

def cacheData(data):
    cache.set('data',data)
    print(cache.get('data'))

def getCacheData():

    print(cache.get("data"))

@parser_classes((JSONParser,))   
@api_view(['POST'])
def getCurrentData(request):
    try:
        user = request.data
        userBL = user['businessLine']
        userRegion = user['region']
        #print(cache.get("data_dict")[userBL][userRegion])
        print(cache.get("data_dict"))
        
        return Response(cache.get("data_dict")[userBL][userRegion])
    except Exception as e:
        print(e)
        return Response("No data found")



# Create your views here.
# Create your views here.


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
