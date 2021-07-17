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
