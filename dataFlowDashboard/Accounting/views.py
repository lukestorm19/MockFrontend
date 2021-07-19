from django.shortcuts import render
from django.http import HttpResponse
from Accounting.models import AccountingData
from Exceptions.models import ExceptionType
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.core.cache import cache

from Accounting.serializers import AccountingDataSerializer
# Create your views here.
final_buffer=[]
def Accounting_Query(): 
    entry_list = list(AccountingData.objects.filter(exception_component="Accounting"))
    for i in entry_list:
        if not (ExceptionType.objects.filter(exception_ID=i.exception_ID).exists()):
            new_entry = ExceptionType(exception_ID=i.exception_ID,
            exception_name=i.exception_name,exception_component=i.exception_component,
            exception_level=i.exception_level,exception_description=i.exception_description,
            exception_COBDT=i.exception_COBDT,exception_LegalEntity=i.exception_LegalEntity,
            exception_ProfitCenter=i.exception_ProfitCenter,exception_BusinessLine=i.exception_BusinessLine,
            exception_Region=i.exception_Region)
            new_entry.save()
        else:
            entry_list.remove(i)
    if(cache.get('data_dict')==None):
        cache.set('data_dict', data_dict)
    else:
        data_dict.extend(cache.get('data_dict'))
        cache.set('data_dict', data_dict)
    # cache.get('data_dict').append(result)

    print("The cache is updated")
    print("Cache data:")
    print(cache.get('data_dict'))

    # for i in entry_list:
    #     if i not in final_buffer:
    #         temp_buffer.append(i)
    # for j in temp_buffer:
    #     new_entry = ExceptionType(exception_ID=j.Exception_ID,
    #     exception_name=j.Exception_name,exception_component=j.Exception_component,
    #     exception_level=j.Exceptiom_level,exception_description=j.Exception_description,
    #     exception_COBDT=j.Exception_COBDT,exception_LegalEntity=j.Exception_LegalEntity,
    #     exception_ProfitCenter=j.Exception_ProfitCenter,exception_BusinessLine=j.Exception_BusinessLine,
    #     exception_Region=j.Exception_Region)
    #     new_entry.save()
    # final_buffer.extend(temp_buffer)

"""
@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'getAccountingRecords': '/getAccountingRecords/',
       
    }

    return Response(api_urls)


@api_view(['GET'])
def getAccountingRecords(request):
    records = AccountingData.objects.all()
    serializer = AccountingDataSerializer(records, many=True)
    return Response(serializer.data)   
"""
