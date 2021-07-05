from django.contrib import admin
from .models import ExceptionType, RD_BOOK, ER_LEGAL_ENTITY, ER_ACCOUNT, SD_FEED_VALIDATION, SD_AMOUNT_TYPE,FilterTable


# # Register your models here.
admin.site.register(RD_BOOK)
admin.site.register(ER_LEGAL_ENTITY)
admin.site.register(ER_ACCOUNT)
admin.site.register(ExceptionType)
admin.site.register(SD_AMOUNT_TYPE)
admin.site.register(SD_FEED_VALIDATION)
admin.site.register(FilterTable)

