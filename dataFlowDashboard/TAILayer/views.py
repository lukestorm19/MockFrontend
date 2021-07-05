from django.shortcuts import render
from DataSource.models import ExceptionType
from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from DataSource.models import ExceptionType, RD_BOOK, ER_LEGAL_ENTITY, ER_ACCOUNT, SD_FEED_VALIDATION, SD_AMOUNT_TYPE,FilterTable
from DataSource.serializers import ExceptionType, RD_BOOKSerializer, ER_LEGAL_ENTITYSerializer, ER_ACCOUNTSerializer, SD_FEED_VALIDATIONSerializer, SD_AMOUNT_TYPESerializer,FilterTableSerializer

# Create your views here.
# Create your views here.




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


@api_view(['GET'])
def postList(request, username):
    posts = Posts.getPosts(username)
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

# High Level Exceptions of the TAI

def checkRequiredField():
    return False

def checkTAIExceptions(request):


    rows = Transaction.objects.all()
    exceptions = ExceptionType.objects.all()
    excpCount = 0

    # for every row, check each exception and raise a flag if required
    print(globals())
    a=3
    def requiredFieldEmpty():
        if(a>0):
            return True
        else:
            return False

    # def dataProvison():
    #     if():
    #         return True
    #     else:
    #         return False

    # def duplicateVersionFound():
    #     if():
    #         return True
    #     else:
    #         return False

    # def holidayValuedata():
    #     if():
    #         return True
    #     else:
    #         return False

    # def optionalFieldEmpty:
    #     if():
    #         return True
    #     else:
    #         return False
    
    
    # def duplicatedValuations:
    #     if():
    #         return True
    #     else:
    #         return False
    
    
    # def duplicatedFields:
    #     if():
    #         return True
    #     else:
    #         return False
    
    # rows=[laksh,jai,aashna]      

    for row in rows:

        for exception in exceptions:
            
            if(globals()[exception.exception_function]):
                # requiredFieldEmpty(row)
              

                excpCount += 1
                print(exception.exception_description, "is raised by the transaction", row.transaction_id)
                break
                # filter out as high level or low level
    print("Number of exceptions raised", excpCount)

    return HttpResponse("Number of Exceptions", excpCount)
        