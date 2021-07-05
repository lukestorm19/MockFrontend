from django.db import models
import datetime
from django.db.models.fields import IntegerField
# Create your models here.


   

# TODO
# REMOVE PRIMARY AND UNIQUE

#SD_AMOUNT_TYPE Table

class FilterTable(models.Model):
    # choices=[('HIGH','HIGH'),('LOW','LOW')], blank = True)
    record_ID=models.IntegerField(unique = False, blank = True)
    exception_name= models.CharField(max_length = 50,choices=[('requiredFieldEmpty','requiredFieldEmpty'),
    ('dataProvision','dataProvision'),('scopeGap','scopeGap'),('misc','misc'),('rulesOtherwise','rulesOtherwise'),('DuplicatedVersionFound','DuplicatedVersionFound'),('wrongQuantityGrossNet','wrongQuantityGrossNet'),('holidayValueDate','holidayValueDate'),('noRiskMgmtView','noRiskMgmtView'),('recDiffView','recDiffView'),('noSettlementView','noSettlementView'),('optionalFieldEmpty','optionalFieldEmpty'),('netGrossDifference','netGrossDifference'),('zeroProof','zeroProof'),('notValidField','notValidField'),('defaultValue','defaultValue'),('notValidField','notValidField')], blank = True)
    exception_layer= models.CharField(max_length = 50, blank = True)
    
class SD_AMOUNT_TYPE(models.Model):
    """
     """
    SD_AMOUNT_TYPE_MAP_ID = models.IntegerField(primary_key = False)
    BUSINESS_LINE_ID = models.IntegerField(unique=False, blank = True) # check for foreign key
    DBPALACE_RAT = models.CharField(max_length= 255, blank = True) 
    CASH_FLOW_NAME = models.CharField(max_length = 50, blank = True)
    ACCOUNTABLE_TYPE = models.CharField(max_length = 50, blank = True)
    LAST_MOD_TS = models.DateTimeField(null=True, blank = True) # check for datatype
    TRADING_LOCATION = models.CharField(max_length = 50, blank = True) 
    RAT_ID = models.IntegerField(unique=False, blank = True)
    DBSECTYPE = models.CharField(max_length = 50, blank = True) #check what it is
    ADJ_PRODUCT_TYPE = models.CharField(max_length = 51, blank = True)
    def getNextId():
        return random.randint(1,102398014801)
    #    return SD_AMOUNT_TYPE.objects.all().orderby("-SD_AMOUNT_TYPE_MAP_ID", blank = True)[0]["SD_AMOUNT_TYPE_MAP_ID"]+1

# SD_FEED_VALIDATION
class SD_FEED_VALIDATION(models.Model):
    SD_FEED_VALIDATION_ID=models.IntegerField( blank = True)
    CONFIGURATION_ID=models.IntegerField( blank = True)
    HIERARCHY_FEED_ID=models.CharField(max_length = 50, blank = True)
    HIERARCHY_TYPE= models.CharField(max_length = 50, null = True, blank = True)
    PARENT_ID=models.IntegerField( blank = True)
    ATTRIBUTE=models.CharField(max_length = 50, null = True, blank = True)
    ALIAS=models.CharField(max_length = 50, null = True, blank = True)
    SOURCE=models.CharField(max_length = 50, null = True, blank = True)
    CATALOG_ID=models.CharField(max_length = 50, blank = True)
    LAST_MOD_TS = models.CharField(max_length=50, null=True, blank = True) #confirm?
    ACC_TYPE=models.CharField(max_length = 50, null = True, blank = True)
    def getNextId():
        try:
            return SD_FEED_VALIDATION.objects.all().order_by("-SD_FEED_VALIDATION_ID")[0].SD_FEED_VALIDATION_ID+1
        except:
            return 1
    def __str__(self):
        return str(self.SD_FEED_VALIDATION_ID)


#ER_ACCOUNT
class ER_ACCOUNT(models.Model):
    ACCOUNT_ID= models.IntegerField(primary_key=True, blank = True)
    DESCRIPTION= models.CharField(max_length=50, blank = True)
    PARENT_ACCOUNT_ID= models.IntegerField( blank = True)
    GAAP= models.CharField(max_length = 50, blank = True)           # check for datatype
    IS_PNL= models.BooleanField( blank = True)      # check for datatype
    IS_ON_BALANCE_SHEET= models.BooleanField( blank = True) # check for datatype
    IS_CONTRA= models.BooleanField( blank = True)  # check for datatype
    IS_WASH= models.BooleanField( blank = True)  # check for datatype
    IS_NOSTRO= models.BooleanField( blank = True) # check for datatype
    IS_RECONCILED= models.BooleanField( blank = True) # check for datatype
    IS_GL_ACCOUNT= models.BooleanField( blank = True) # check for datatype
    IS_CONTROL= models.BooleanField( blank = True)   # check for datatype
    LAST_MOD_TS= models.IntegerField( blank = True)  # check for datatype
    IS_MARGIN= models.BooleanField( blank = True)     # check for datatype
    IS_COMMISSION= models.BooleanField( blank = True) # check for datatype
    IS_YEAR_END= models.DateField( blank = True)
    def getNextId():
        try:
            return ER_ACCOUNT.objects.all().order_by("-ACCOUNT_ID")[0].ACCOUNT_ID+1
        except:
            return 1
    def __str__(self):
        return str(self.ACCOUNT_ID)

 
#ER_LEGAL_ENTITY
class ER_LEGAL_ENTITY(models.Model):
    LEGAL_ENTITY_ID = models.IntegerField(unique = False, blank = True)
    BOOKING_ENTITY = models.CharField(max_length=50, blank = True)
    DESCRIPTION = models.CharField(max_length=50, blank = True)
    REGION_ID = models.IntegerField( blank = True)
    COUNTRY_ID = models.IntegerField( blank = True)
    PL_CLEARDOWN_ACCOUNT = models.CharField(max_length=50, blank = True)
    IS_CONVERSION = models.CharField(max_length=50, blank = True)
    CONVERSION_DATE = models.DateField(null=True, blank = True)
    LAST_MOD_TS = models.DateTimeField(null=True, blank = True)
    DBP_IN_SCOPE = models.BooleanField( blank = True)
    DBP_BEGIN_DATE = models.DateField(null=True, blank = True)
    def getNextId():
       return ER_LEGAL_ENTITY.objects.all().order_by("-LEGAL_ENTITY_ID")[0].LEGAL_ENTITY_ID+1

#Book
class RD_BOOK(models.Model):
    BOOK_ID = models.IntegerField(primary_key=True, blank = True)
    LEGAL_ENTITY_CODE = models.ForeignKey(ER_LEGAL_ENTITY, on_delete=models.CASCADE, blank = True) #CONFIRM IF IT IS SAME AS LEGAL_ENTITY_ID
    TRADER_BOOK_NAME = models.CharField(max_length = 50, null = True, blank = True)
    BOOK_TYPE = models.CharField(max_length = 50, null = True, choices=[('FX','FX'),('LD','LD'),('EQ','EQ'),('OTC','OTC')], blank = True)
    PROFIT_CTR = models.CharField(max_length = 50, null = True, blank = True) #check where is it coming from
    ACCOUNTING_TREATMENT =  models.CharField(max_length=50, blank = True)
    REGULATORY_REPORTING_TREAT =  models.CharField(max_length=50, blank = True)
    SETTLEMENT_SYSTEM_NAME =  models.CharField(max_length=50, blank = True)
    SETTLEMENT_SYSTEM_ACCOUNT =  models.ForeignKey(ER_ACCOUNT, on_delete=models.CASCADE, blank = True) #CONFIRM IF IT IS SAME AS ACCOUNT_ID
    TRADER_BOOK_SOURCE_SYS =  models.CharField(max_length = 50, null = True, blank = True)
    GLOBAL_TRADER_BOOK_FUNCTION =  models.CharField(max_length = 50, null = True, blank = True)
    PRIMARY_LD_BOOK =  models.CharField(max_length = 50, null = True, blank = True)
    BUS_OWNER_CODE =  models.IntegerField( blank = True)
    BUS_OWNER_NAME =  models.CharField(max_length = 50, null = True, blank = True)
    BUS_LEV =  models.CharField(max_length = 50, null = True, blank = True)
    BUS_LEV_NAME =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER1_TYPE =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER1_SYS =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER2_TYPE =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER2_SYS =  models.CharField(max_length = 50, null = True, blank = True)
    BOOK_STATUS =  models.CharField(max_length = 50, null = True, blank = True) #confirm?
    X_PLATFORM_FLAG =  models.BooleanField( blank = True)
    XML_COLUMN =  models.CharField(max_length = 50, null = True, blank = True) #CONFIRM?
    VALID_FROM =  models.DateField( blank = True)
    VALID_TO =  models.DateField( blank = True)
    RECORD_START =  models.DateField( blank = True)
    RECORD_END =  models.DateField( blank = True)
    RD_BOOK_IS_ACTIVE =  models.BooleanField( blank = True)
    RD_BOOK_VERSION =  models.CharField(max_length = 50, null = True, blank = True)
    RD_BOOK_SOURCE =  models.CharField(max_length = 50, null = True, blank = True)
    LOCATION =  models.CharField(max_length = 50, null = True, blank = True)
    LAST_MOD_TS =  models.CharField(max_length = 50, null = True, blank = True)
    MANAGED_BY =  models.CharField(max_length = 50, null = True, blank = True)
    BUSINESS_AREA =  models.CharField(max_length = 50, null = True, blank = True) #confirm?
    MIS3_SIGN_OFF =  models.CharField(max_length = 50, null = True, blank = True)
    SUBLEDGER_ACCOUNTING =  models.CharField(max_length = 50, null = True, blank = True)
    PV_SUBLEDGER_ACCOUNTING =  models.CharField(max_length = 50, null = True, blank = True)
    VALUATION_BOOK_SYSTEM_NAME =  models.CharField(max_length = 50, null = True, blank = True)
    RD_ORIGINAL_SOURCE =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER3_TYPE =  models.CharField(max_length = 50, null = True, blank = True)
    SUB_LEDGER3_SYS =  models.CharField(max_length = 50, null = True, blank = True) #confirm?
    SUBFUNCTION_CODE =  models.IntegerField( blank = True)
    DOCUMENT_ID =  models.IntegerField( blank = True)
    EPE_NON_TRADING =  models.CharField(max_length = 50, null = True, blank = True)
    RD_BOOK_ID_SOURCE =  models.CharField(max_length = 50, null = True, blank = True)
    PRIMARY_TRADER_LOCATION =  models.CharField(max_length = 50, null = True, blank = True)
    PORTFOLIO_NAME =  models.CharField(max_length = 50, null = True, blank = True)
    IFRS9_ACC_CATEGORY_CODE =  models.IntegerField( blank = True)
    IFRS9_ACC_CATEGORY_NAME =  models.CharField(max_length = 50, null = True, blank = True)

    UBR_FA_CODE =  models.IntegerField( blank = True)
    def getNextId():
        try:
            return RD_BOOK_ID_SOURCE.objects.all().order_by("-BOOK_ID")[0].BOOK_ID+1
        except Exception:
            import random
            return random.randint(1,10000000)
#Exception Table

class ExceptionType(models.Model):

    exceptionID = models.IntegerField(unique = False, blank = True)
    exception_name = models.CharField(max_length = 50, blank = True)
    exception_description = models.CharField(max_length = 200, blank = True)
    exception_function = models.CharField(max_length = 50, blank = True)
    exception_component = models.CharField(max_length = 20, choices = [('TAInbound','TAInbound'), ('TAI','TAI'), ('Accounting', 'Accounting')], blank = True)
    exception_level = models.CharField(max_length = 20, choices=[('HIGH','HIGH'),('LOW','LOW')], blank = True)
 

    