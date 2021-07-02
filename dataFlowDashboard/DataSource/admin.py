from django.contrib import admin
from .models import Book,Transaction,Customer, ExceptionType


# Register your models here.
admin.site.register(Book)
admin.site.register(Transaction)
admin.site.register(Customer)
admin.site.register(ExceptionType)
