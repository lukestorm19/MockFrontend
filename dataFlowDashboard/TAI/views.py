from Exceptions.models import ExceptionType
from django.db import models
from django.shortcuts import redirect, render
from django.http import HttpResponse
import tarfile
import os
from Exceptions import models
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_xml.parsers import XMLParser
from rest_framework_xml.renderers import XMLRenderer
# from TAI.tasks import insert_db_task
from TAI import tasks

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        # 'List': '/subject-list/',
        # 'Detail View': '/subject-detail/<str:pk>/',
        # 'Create': '/subject-create/',
        # 'Update': '/subject-update/<str:pk>/',
        # 'Delete': '/subject-delete/<str:pk>/',
    }

    return Response(api_urls)

def readFile(path,fileName, isXML = False):
#  reading the file
    print("Reading", path)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(BASE_DIR)
    tar = tarfile.open(os.path.join(BASE_DIR, path))
    f = tar.extractfile(fileName)
    import json
    import xmltodict
    if(fileName == "data.xml"):
    # if(isXML):
        print(f)
        with open("data.xml") as xml_file:
            data_dict1 = xmltodict.parse(xml_file.read())
        xml_file.close()
        data_dict={}
        for key, val in data_dict1.keys():
            data_dict[key] = val

    else:
        data_dict = json.loads(f.read())
        print(data_dict)
        for result in data_dict:
            ExceptionType.objects.create(
           exception_ID = int(result['exception_ID']),
           exception_name= result['exception_name'],
           exception_component=result['exception_component'],
           exception_level = result['exception_level'],
           exception_description  = result['exception_description'],
           exception_COBDT = result['exception_COBDT'],
           exception_LegalEntity= result['exception_LegalEntity'],
           exception_ProfitCenter= result['exception_ProfitCenter'],
           exception_BusinessLine = result['exception_BusinessLine'],
           exception_Region= result['exception_Region'] 
         ) 
    if(cache.get('data_dict')==None):
        cache.set('data_dict', data_dict)
    else:
        data_dict.extend(cache.get('data_dict'))
        cache.set('data_dict', data_dict)
    # cache.get('data_dict').append(result)

    print("The cache is updated")
    print("Cache data:")
    print(cache.get('data_dict'))
    print(path)
    print("The data has been inserted")
    return HttpResponse(path)





from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser   
from rest_framework.decorators import parser_classes
from rest_framework_xml.parsers import XMLParser

@api_view(['POST'])
@parser_classes((XMLParser,))   
def fileIsReady(request):
    xml  = request.data
    print(xml)
    loc = xml['feed_meta_data']['remote_data']['transport']['location']
    # print(XMLParser().parse(request))
    print(loc)
    loc = "2276a85aee5e94c0df04b2ab62d04410.tar.gz"
    # call the task
    fileName = "2276a85aee5e94c0df04b2ab62d04410.json"
    # fileName = "data.xml"
    tasks.insert_db_task(loc, fileName)
    # readFile(loc)
    # var = parse(request)
    return HttpResponse()
    # return HttpResponse(XMLParser().parse(request))
    # return HttpResponse(XMLParser().parse(request)['feed_meta_data']['remote_data']['location'])
    # print(var)
    # print(var['feed_meta_data']['remote_data']['location'])

    # print(request.POST)
    # return Response(var)
    #     {
    # location:"jsono1.tar.gz"
    # }



    # Input XML 
    # <cm:ta_control_message xmlns:val="TAValuation" xmlns:acc="TAAccounting" xmlns:tra="TATrade" xmlns:ps="TAProcessStatus" xmlns:ece="TAExpectedCreditEvent" xmlns:adj="TAAdjustment" xmlns:sett="TASettlement" xmlns:cm="TAControlMessage" xmlns:bal="TABalance" xmlns:et="TAExtendedAttributes" xmlns:mov="TAMovement" xmlns:conv="TAConversion" xmlns:ns15="TACallAccountInterest" xmlns:mh="TAMessageHeader" xmlns:ns14="TACompoundInterest">
    #         <header>
    #             <mh:business_object_id>148</mh:business_object_id>
    #             <mh:business_object_type>CONTROL</mh:business_object_type>
    #             <mh:business_object_owner>FDW</mh:business_object_owner>
    #             <mh:business_object_version>578806</mh:business_object_version>
    #             <mh:business_event_type>NEW</mh:business_event_type>
    #             <mh:business_event_timestamp>2020-12-31T00:00:00</mh:business_event_timestamp>
    #             <mh:delivery_unit_id>148</mh:delivery_unit_id>
    #             <mh:delivery_unit_instance_id>578806</mh:delivery_unit_instance_id>
    #             <mh:delivery_unit_instance_entity_id>148</mh:delivery_unit_instance_entity_id>
    #         </header>
    #         <feed_meta_data>
    #             <status>PROCESSED</status>
    #             <module>ACCOUNTING</module>
    #             <num_accountables>9391</num_accountables>
    #             <value_date>2020-12-31</value_date>
    #             <remote_data>
    #                 <transport>
    #                     <type>HDFS</type>
    #                     <host>hdfs://sdl-uat</host>
    #                     <port>8020</port>
    #                     <location>6ccb12be686ee16a9c95f604b26d2c9b.tar.gz</location>
    #                 </transport>
    #                 <file_list>
    #                     <relativeURI>IFRS9_AMERICAS_LATIN_AM_ME578806part-00000.gz</relativeURI>
    #                     <compression>GZIP</compression>
    #                     <digest type="SHA1">c76192518f8292d9ff617de978cf4c1692220742</digest>
    #                 </file_list>
    #             </remote_data>
    #         </feed_meta_data>
    #     </cm:ta_control_message>

from django.core.cache import cache

def cacheData(data):
    cache.set('data',data)
    print(cache.get('data'))

def getCacheData():
    print(cache.get("data"))


# @api_view(['POST'])
def getCurrentData(request):
    
    print()
    return HttpResponse(cache.get("data_dict"))
