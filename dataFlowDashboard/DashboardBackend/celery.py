from __future__ import absolute_import,unicode_literals
import os
from celery import Celery
import DashboardBackend

os.environ.setdefault("DJANGO_SETTINGS_MODULE",'DashboardBackend.settings')


app=Celery('DashboardBackend')
app.config_from_object('django.conf:settings',namespace='CELERY')
app.autodiscover_tasks()