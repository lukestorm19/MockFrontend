from __future__ import absolute_import,unicode_literals
from celery import shared_task
from Filters.views import readFileFilter
@shared_task
def insert_dbfilter_task(filePath, fileName):

    # call the insert db fun
    return readFileFilter(filePath, fileName)
