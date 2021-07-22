from django.shortcuts import render
from django.core.cache import cache
   
   
def intermediate_loadFunction(data_dict):

    print(data_dict,"Laksh Jethani")
    if(cache.get('data_dict') == None):
        print("Cache is empty")
        finalDict = {

        }
  
    else:
        print("Data in cache")
        finalDict = cache.get("data_dict")
        print(finalDict)
 
        exception_BusinessLine = data_dict['exception_BusinessLine']
        exception_Region = data_dict['exception_Region']
        if(exception_BusinessLine not in finalDict):
            print(exception_BusinessLine,"not in cache")
            finalDict[exception_BusinessLine] = {}
            finalDict[exception_BusinessLine][exception_Region] = []
        elif(exception_Region not in finalDict[exception_BusinessLine]):
            print(exception_Region, "not in cache")

            finalDict[exception_BusinessLine][exception_Region] = []
        else:
            print(exception_BusinessLine, exception_Region, "in cache")
        print("Appending into finaldict,", finalDict)
        finalDict[exception_BusinessLine][exception_Region].append(data_dict)
        print("Appended into finaldict,", finalDict)
    cache.set("data_dict",finalDict)
    