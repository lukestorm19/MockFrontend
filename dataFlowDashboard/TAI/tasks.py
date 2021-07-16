from __future__ import absolute_import,unicode_literals
from TAI import views
from celery import shared_task

@shared_task
def insert_db_task(filePath):

    # call the insert db fun
    return views.readFile(filePath)

@shared_task
def insert_dbfilter_task(filePath):

    # call the insert db fun
    return views.readFile(filePath)
