from django.contrib import admin
from .models import Book,Transaction,Customer


# Register your models here.
admin.site.register(Book)
admin.site.register(Transaction)
admin.site.register(Customer)
