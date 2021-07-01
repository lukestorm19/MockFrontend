from django.db import models
import datetime
# Create your models here.
class Book(models.Model):
    book_id = models.IntegerField(primary_key=True)
    book_name = models.CharField(max_length=50,null=True)
    type = models.CharField(max_length=50,null=True)
    location = models.CharField(max_length=50,null=True)

class Customer(models.Model):
    cust_id = models.IntegerField(primary_key=True)
    cust_name = models.CharField(max_length=50,null=True)
   
class Transaction(models.Model):
    transaction_id = models.IntegerField(primary_key=True)
    book_id = models.ForeignKey(Book,on_delete=models.CASCADE)
    cust_id = models.ForeignKey(Customer,on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=50,null=True)
    transaction_timestamp = models.DateTimeField(default=datetime.datetime.now(),null=True)
    linked_transaction = models.IntegerField(null=True)

    