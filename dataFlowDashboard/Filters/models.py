from django.db import models
from django.db.models.fields import DateField
# Create your models here.

class FilterData(models.Model):
    filter_ID=models.IntegerField()
    filter_name=models.CharField(max_length=50)
    filter_component=models.CharField(max_length=50)
    filter_description=models.CharField(max_length=20)
    business_line=models.CharField(max_length=20)
    region=models.CharField(max_length=20)
    business_line=models.CharField(max_length=20)
    legal_entity=models.CharField(max_length=20)
    profit_center=models.CharField(max_length=20)
    book_name=models.CharField(max_length=20)
    cob_dt=models.DateField(null=True)


    
    
    
