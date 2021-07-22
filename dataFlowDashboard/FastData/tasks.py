from __future__ import absolute_import,unicode_literals
from typing import final
from celery import shared_task
from Exceptions.models import ExceptionType
from datetime import date
from django.forms.models import model_to_dict
from FastData.views import intermediate_loadFunction
@shared_task
def UpdataCache():
    data_of_today = (ExceptionType.objects.filter(exception_COBDT=date.today()))
    # for i in data_of_today:
    #     if i not in final_today:
    #         final_today.append(i)
    # for j in final_today:
    #     intermediate_loadFunction(model_to_dict(j))
    final_today=[]
    for i in data_of_today:
        if i not in final_today:
            final_today.append(i)
    for j in final_today:
        redirect()
        intermediate_loadFunction(request,model_to_dict(j))