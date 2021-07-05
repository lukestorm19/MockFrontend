from django.shortcuts import render
from DataSource.models import SD_AMOUNT_TYPE,SD_FEED_VALIDATION,ER_ACCOUNT,ER_LEGAL_ENTITY,RD_BOOK,ExceptionType

# Create your views here.
def checkBookExists(bookID):

    if(RD_BOOK.objects.exists(BOOK_ID = bookID)):
        return True
    else:
        return False


# def checkTAInboundFilters(request, row):


#     # rows = Transaction.objects.all()
#     # exceptions = ExceptionType.objects.all()
#     # excpCount = 0

#     # for every row, check each exception and raise a flag if required
#     print(globals())

#     for row in rows:

#         for exception in exceptions:
            
#             if(globals()[exception.exception_function]):
                

#                 excpCount += 1
#                 print(exception.exception_description, "is raised by the transaction", row.transaction_id)
#                 break
#                 # filter out as high level or low level
#     print("Number of exceptions raised", excpCount)

#     return HttpResponse("Number of Exceptions", excpCount)
        

# def 