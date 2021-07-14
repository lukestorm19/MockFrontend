"""DashboardBackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
import TAI
from TAI import views as tai_views
from Exceptions import views as exceptions_views
from Users import views as users_views
from Filters import views as filters_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('readFile/path=<str:path>', tai_views.readFile),
    path('fileIsReady/', tai_views.fileIsReady),
    path('admin/', admin.site.urls),
    path('', exceptions_views.apiOverview),
    path('getProcessedRecords', exceptions_views.getProcessedRecords),
    path('getUserRecords', users_views.getUserRecords),
    path('getFilteredRecords', filters_views.getFilteredRecords),
        #pickle code
    path('main/',include('Exceptions.urls'))
]
