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

# from .serializers import PostSerializer, UserSerializer, PostCommentSerializer, FollowSerializer
# from .models import Posts, User, PostComments, Follow
# Create your views here.
# TODO Create shared task for Accounting
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

# def populateDatabase(request):
#     # for i in Data["book"]:
#     #    print(i)
#     #    #obj = Book(book_id = i["book_id"],book_name=i["name"],type=i["Type"],location=i["Location"])
#        #obj.save()
#     for i in json_mock:

#         if(1):
#          # try:
#         # obj = Transaction(transaction_id = i["transaction_id"],book_id=Book.objects.get(book_id=i["book_id"]),cust_id=Customer.objects.get(cust_id=i["cust_id"]),transaction_type=i["transaction_type"],linked_transaction=i["linked_transaction"])
#         # obj.save()
#         #   #except Exception:
#            # print(Exception,i)
#     return HttpResponse('Hi')

def readFile(path,isXML = False):
#  reading the file
    print("Reading", path)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    tar = tarfile.open(os.path.join(BASE_DIR, path))
    f = tar.extractfile("2276a85aee5e94c0df04b2ab62d04410.json")

    
    import json
    import xmltodict
    if(isXML):
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
    # objects=[]
    # for json_obj in j:
    #     objects.append(ExceptionType(**json_obj))
    # ExceptionType.objects.bulk_create(objects)
    # print(j)
    # for i in j:
    #     d1=ExceptionType(**i)
    #     d1.save
    for result in j:
        ExceptionType.objects.create(
           exception_ID = result['exception_ID'],
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
        
    print(path)
    print("The data has been inserted")
    return HttpResponse(path)





from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser   
# TODO Accept location as a hosted link
# TODO CACHE TABLE  
# TODO CREATE A Q 
# TODO WHY ARE WE USING Q (NEXT MEETING)
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
    loc = "6ccb12be686ee16a9c95f604b26d2c9b.tar.gz"
    # call the task
    tasks.insert_db_task(loc)
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
    #                     <location>/project/acsuat/rtb/private/svc_fimta/deploy/uat3/tai/data/IFRS9/IFRS9_11192850/output/data/148</location>
    #                 </transport>
    #                 <file_list>
    #                     <relativeURI>IFRS9_AMERICAS_LATIN_AM_ME578806part-00000.gz</relativeURI>
    #                     <compression>GZIP</compression>
    #                     <digest type="SHA1">c76192518f8292d9ff617de978cf4c1692220742</digest>
    #                 </file_list>
    #             </remote_data>
    #         </feed_meta_data>
    #     </cm:ta_control_message>


    # <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    # <cm:ta_control_message xmlns:val="TAValuation" xmlns:acc="TAAccounting" xmlns:tra="TATrade" xmlns:ps="TAProcessStatus" xmlns:ece="TAExpectedCreditEvent" xmlns:adj="TAAdjustment" xmlns:sett="TASettlement" xmlns:cm="TAControlMessage" xmlns:bal="TABalance" xmlns:et="TAExtendedAttributes" xmlns:mov="TAMovement" xmlns:conv="TAConversion" xmlns:ns15="TACallAccountInterest" xmlns:mh="TAMessageHeader" xmlns:ns14="TACompoundInterest">
    #     <header>
    #         <mh:business_object_id>148</mh:business_object_id>
    #         <mh:business_object_type>CONTROL</mh:business_object_type>
    #         <mh:business_object_owner>FDW</mh:business_object_owner>
    #         <mh:business_object_version>578806</mh:business_object_version>
    #         <mh:business_event_type>NEW</mh:business_event_type>
    #         <mh:business_event_timestamp>2020-12-31T00:00:00</mh:business_event_timestamp>
    #         <mh:delivery_unit_id>148</mh:delivery_unit_id>
    #         <mh:delivery_unit_instance_id>578806</mh:delivery_unit_instance_id>
    #         <mh:delivery_unit_instance_entity_id>148</mh:delivery_unit_instance_entity_id>
    #     </header>
    #     <feed_meta_data>
    #         <status>PROCESSED</status>
    #         <module>ACCOUNTING</module>
    #         <num_accountables>9391</num_accountables>
    #         <value_date>2020-12-31</value_date>
    #         <remote_data>
    #             <transport>
    #                 <type>HDFS</type>
    #                 <host>hdfs://sdl-uat</host>
    #                 <port>8020</port>
    #                 <location>/project/acsuat/rtb/private/svc_fimta/deploy/uat3/tai/data/IFRS9/IFRS9_11192850/output/data/148</location>
    #             </transport>
    #             <file_list>
    #                 <relativeURI>IFRS9_AMERICAS_LATIN_AM_ME578806part-00000.gz</relativeURI>
    #                 <compression>GZIP</compression>
    #                 <digest type="SHA1">c76192518f8292d9ff617de978cf4c1692220742</digest>
    #             </file_list>
    #         </remote_data>
    #     </feed_meta_data>
    # </cm:ta_control_message>
from django.core.cache import cache

def cacheData(data):
    cache.set('data',data)
    print(cache.get('data'))

def getCacheData():
    print(cache.get("data"))