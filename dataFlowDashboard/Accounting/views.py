from django.shortcuts import render
from django.http import HttpResponse
from Accounting.models import AccountingData

# Create your views here.
def Accounting_Query(): 
    entry_list = list(AccountingData.objects.filter(Exception_component="Accounting"))
    return entry_list

    
