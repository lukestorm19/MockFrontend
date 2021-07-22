from django.shortcuts import render
from django.core.cache import caches
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.cache import cache

@api_view(['GET',])
def intermediate_loadFunction(request, data_dict):

    print(data_dict)
      # format for this finalDict will be
        # {

        #     region1:
        #     {
        #         bLine1: [ data for bLine1 ]
        #         bLine2: [data for bLine1]

        #     }
        #     region2:
        #     {
        #         bLine1: [ data for bLine1 ]
        #         bLine2: [data for bLine1]

        #     }
        # }
        # Another dict for checking if items already exist in the cache]
         # format for this checkDict will be
        # {

        #     region1:
        #     {
        #         bLine1: set(exceptionID)
        #         bLine2: set(exceptionID)

        #     }
        #     region2:
        #     {
        #      bLine1: set(exceptionID)
        #         bLine2: set(exceptionID)

        #     }
        # }
    if(cache.get('check_dict') == None):
        print("Cache is empty")
        finalDict = {

        }
        checkDict = {
            
        }
    else:

        finalDict = cache.get("data_dict")
        checkDict = cache.get("check_dict")
        print("Previous data of dict", finalDict)
 
        exception_BusinessLine = data_dict['exception_BusinessLine']
        exception_Region = data_dict['exception_Region']
        row_ID = data_dict['id']

        if(exception_BusinessLine not in checkDict):
            print(exception_BusinessLine,"not in cache")
            checkDict[exception_BusinessLine] = {}
            checkDict[exception_BusinessLine][exception_Region] = set()
            finalDict[exception_BusinessLine] = {}
            finalDict[exception_BusinessLine][exception_Region] = []
        elif(exception_Region not in checkDict[exception_BusinessLine]):
            print(exception_Region, "not in cache")

            checkDict[exception_BusinessLine][exception_Region] = set()
            finalDict[exception_BusinessLine][exception_Region] = []
        else:
            print(exception_BusinessLine, exception_Region, "in cache")
        print("Appending into finaldict,", finalDict)
        if(row_ID not in checkDict[exception_BusinessLine][exception_Region]):
            finalDict[exception_BusinessLine][exception_Region].append(data_dict)
            print("checkDict is", checkDict)
            checkDict[exception_BusinessLine][exception_Region].add(row_ID)

            print("Appended into finaldict,", finalDict)
        else:
            print(id,"already in the cache")
            
    cache.set("data_dict",finalDict)
    cache.set("check_dict",checkDict)
    
    print("Final content of cache:")
    print(cache.get("check_dict"))
    print("Cache content")
    print(cache.get("data_dict"))



@api_view(['GET',])
def getCacheContent(request, businessLine, region):
    print()
    print(cache.get('data_dict'), caches["check_dict"])
    if(cache.get('data_dict') == None):
        print("no data in cache")
        return Response([])
    finalDict = cache.get("data_dict")

    if(businessLine not in finalDict):

        print(businessLine,"not in cache")
        finalDict[businessLine] = {}
        finalDict[businessLine][region] = []
        return Response([]) 

    elif(region not in finalDict[businessLine]):
        print(region, "not in cache")

        finalDict[businessLine][region] = set()
        finalDict[businessLine][region] = []
        return Response([]) 

    else:
        print(businessLine, region, "in cache")
        
        return Response(finalDict[businessLine][region]) 