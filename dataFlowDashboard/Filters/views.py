from django.shortcuts import render
from Filters.models import FilterData
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
import tarfile
import os
from rest_framework.decorators import api_view
from rest_framework.response import Response
from Filters.models import FilterData
from Filters.serializers import FilterDataSerializer
from Filters.models import FilterData
# Create your views here.
# Create your views here.


def readFileFilter(path,filename,isXML = False):
#  reading the file
    print("Reading", path)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# os.path.join(BASE_DIR, path)
    tar = tarfile.open(r"C:\Users\Administrator\Desktop\data-flow-dashboard\dataFlowDashboard\a5e2fa845c04f0140fc9e00fffeff520.tar.gz")
    f = tar.extractfile("a5e2fa845c04f0140fc9e00fffeff520.tar.gz")

    
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
    for result in data_dict:
        ExceptionType.objects.create(
           filter_ID = int(result['filter_ID']),
           filter_name= result['filter_name'],
           filter_component=result['filter_component'],
           book_name = result['book_name'],
           filter_description  = result['filter_description'],
           cob_dt = result['filter_COBDT'],
           legal_entity= result['filter_LegalEntity'],
           profit_center= result['filter_ProfitCenter'],
           business_line = result['filter_BusinessLine'],
           region= result['filter_Region'] 
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
from Filters import tasks 
@api_view(['POST'])
@parser_classes((XMLParser,))   
def fileIsReadyFilter(request):
    xml  = request.data
    print(xml)
    loc = xml['feed_meta_data']['remote_data']['transport']['location']
    # print(XMLParser().parse(request))
    print(loc)
    loc = "a5e2fa845c04f0140fc9e00fffeff520.tar.gz"
    # call the task
    fileName = "a5e2fa845c04f0140fc9e00fffeff520.json"
    # fileName = "data.xml"
    tasks.insert_dbfilter_task(loc, fileName)
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


    # # Input XML 
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
    #                     <location>a5e2fa845c04f0140fc9e00fffeff520.tar.gz</location>
    #                 </transport>
    #                 <file_list>
    #                     <relativeURI>IFRS9_AMERICAS_LATIN_AM_ME578806part-00000.gz</relativeURI>
    #                     <compression>GZIP</compression>
    #                     <digest type="SHA1">c76192518f8292d9ff617de978cf4c1692220742</digest>
    #                 </file_list>
    #             </remote_data>
    #         </feed_meta_data>
    #     </cm:ta_control_message>

