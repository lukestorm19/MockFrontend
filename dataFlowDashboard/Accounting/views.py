from django.shortcuts import render
from django.http import HttpResponse
from Accounting.models import AccountingData
from Exceptions.models import ExceptionType
# Create your views here.
final_buffer=[]
def Accounting_Query(): 
    entry_list = list(AccountingData.objects.filter(Exception_component="Accounting"))
    temp_buffer=[]
    for i in entry_list:
        if i not in final_buffer:
            temp_buffer.append(i)
    for j in temp_buffer:
        new_entry = ExceptionType(exception_ID=j.Exception_ID,
        exception_name=j.Exception_name,exception_component=j.Exception_component,
        exception_level=j.Exceptiom_level,exception_description=j.Exception_description,
        exception_COBDT=j.Exception_COBDT,exception_LegalEntity=j.Exception_LegalEntity,
        exception_ProfitCenter=j.Exception_ProfitCenter,exception_BusinessLine=j.Exception_BusinessLine,
        exception_Region=j.Exception_Region)
        new_entry.save()
    final_buffer.extend(temp_buffer)

        

    
