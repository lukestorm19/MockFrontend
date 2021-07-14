#Pickle Code
from django.urls import path
from .  import views
  
urlpatterns = [
    path("",views.jsondata,name = "jsondata"),
]