from __future__ import absolute_import,unicode_literals
from TAI import views
from celery import shared_task

@shared_task
def insert_db_task(filePath, fileName):

    # call the insert db fun
<<<<<<< HEAD
    return views.readFile(filePath)

@shared_task
def insert_dbfilter_task(filePath):

    # call the insert db fun
    return views.readFile(filePath)
=======
    return views.readFile(filePath, fileName)
>>>>>>> b3a2d089e0db12c037daf802744aa89c881e397f
