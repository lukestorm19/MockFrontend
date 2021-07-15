from django.db import models

# Create your models here.
class AccountingData(models.Model):
    Exception_ID=models.IntegerField()
    Exception_name=models.CharField(max_length=50,null=True,default='')
    Exception_component=models.CharField(max_length=20,null=True,default='')
    Exceptiom_level=models.CharField(max_length=20,null=True,default='')
    Exception_description=models.CharField(max_length=50,null=True,default='')
    Exception_COBDT=models.DateField(default='2000-01-01')
    Exception_LegalEntity=models.CharField(max_length=50,null=True,default='')
    Exception_ProfitCenter=models.CharField(max_length=50,null=True,default='')
    Exception_BusinessLine=models.CharField(max_length=50,null=True,default='')
    Exception_Region=models.CharField(max_length=50,null=True,default='')    
