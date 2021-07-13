from django.db import models
from django.db.models.fields import DateField
# Create your models here.

class ExceptionType(models.Model):
    exception_ID=models.IntegerField()
    exception_name=models.CharField(max_length=50)
    exception_component=models.CharField(max_length=20)
    exception_level=models.CharField(max_length=20)
    exception_description=models.CharField(max_length=50)
    cob_dt=models.DateField(null=True)
    business_line=models.CharField(max_length=20)
    region=models.CharField(max_length=20)
    profit_center=models.CharField(max_length=20)
    legal_entity=models.CharField(max_length=20)
    book_name=models.CharField(max_length=50)
    
    
