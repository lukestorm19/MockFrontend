
  
import random

import faker.providers
from django.core.management.base import BaseCommand
from faker import Faker
from DataSource.models import SD_AMOUNT_TYPE,SD_FEED_VALIDATION,ER_ACCOUNT,ER_LEGAL_ENTITY,RD_BOOK,ExceptionType

Business_Line = [
    "LD",
    "OTC",
    "FX",
    "EQ"
]

class Provider(faker.providers.BaseProvider):
    def business_line(self):
        return self.random_element(Business_Line)
class Command(BaseCommand):
    help = "Command information"

    def handle(self, *args, **kwargs):

        fake = Faker(["nl_NL"])

        # print(fake.ecommerce_products())

        
        for _ in range(15):
             SD_FEED_VALIDATION.objects.create(
             SD_FEED_VALIDATION_ID=SD_FEED_VALIDATION.getNextId(),
             CONFIGURATION_ID= random.randint(1,15), 
             HIERARCHY_FEED_ID=fake.text(max_nb_chars=50),
             HIERARCHY_TYPE=fake.text(max_nb_chars=50),
             PARENT_ID=  random.randint(1,15), 
             ATTRIBUTE=fake.text(max_nb_chars=50),
             ALIAS=fake.text(max_nb_chars=50),
             SOURCE=fake.text(max_nb_chars=50),
             CATALOG_ID=fake.text(max_nb_chars=50),
             LAST_MOD_TS=fake.text(max_nb_chars=50),
             ACC_TYPE = fake.text(max_nb_chars=50)
             )
        
        for _ in range(15):
            ER_ACCOUNT.objects.create(
                ACCOUNT_ID=ER_ACCOUNT.getNextId(),
                DESCRIPTION= fake.text(max_nb_chars=50),
                PARENT_ACCOUNT_ID= random.randint(1,15),
                GAAP= fake.text(max_nb_chars=50),
                IS_PNL= random.randint(0, 1),   
                IS_ON_BALANCE_SHEET= random.randint(0, 1),
                IS_CONTRA= random.randint(0, 1),
                IS_WASH= random.randint(0, 1),
                IS_NOSTRO= random.randint(0, 1),
                IS_RECONCILED= random.randint(0, 1),
                IS_GL_ACCOUNT= random.randint(0, 1),
                IS_CONTROL= random.randint(0, 1),
                LAST_MOD_TS= random.randint(1,15),  # check for datatype
                IS_MARGIN= random.randint(0, 1),
                IS_COMMISSION= random.randint(0, 1),
                IS_YEAR_END= fake.date(),

            )
        
        
        for _ in range(15):
            ER_ACCOUNT.objects.create(
                ACCOUNT_ID=ER_ACCOUNT.getNextId(),
                DESCRIPTION= fake.text(max_nb_chars=50),
                PARENT_ACCOUNT_ID= random.randint(1,15),
                GAAP= fake.text(max_nb_chars=50),
                IS_PNL= random.randint(0, 1),   
                IS_ON_BALANCE_SHEET= random.randint(0, 1),
                IS_CONTRA= random.randint(0, 1),
                IS_WASH= random.randint(0, 1),
                IS_NOSTRO= random.randint(0, 1),
                IS_RECONCILED= random.randint(0, 1),
                IS_GL_ACCOUNT= random.randint(0, 1),
                IS_CONTROL= random.randint(0, 1),
                LAST_MOD_TS= random.randint(1,15),  # check for datatype
                IS_MARGIN= random.randint(0, 1),
                IS_COMMISSION= random.randint(0, 1),
                IS_YEAR_END= fake.date(),

            )

        for i in range(15):
            SD_AMOUNT_TYPE.objects.create(SD_AMOUNT_TYPE_MAP_ID = random.randint(1, 10000000)+i,
            BUSINESS_LINE_ID = random.randint(1,15), #random.choice(["LD","OTC","FX","EQ"]),
            DBPALACE_RAT = random.choice(["Funds Settled","None"]),
            CASH_FLOW_NAME = fake.name(),
            ACCOUNTABLE_TYPE = fake.text(),
            LAST_MOD_TS = fake.date_time() ,
            TRADING_LOCATION = fake.location_on_land() ,
            RAT_ID = random.randint(1, 1000000)+i,
            DBSECTYPE = fake.text(),
            ADJ_PRODUCT_TYPE = fake.text())
        
        # for _ in range(15):
            # try:
            #     ER_LEGAL_ENTITY.objects.create(
            #     LEGAL_ENTITY_ID = ER_LEGAL_ENTITY.getNextId(),
            #     BOOKING_ENTITY = fake.text(max_nb_chars=50),
            #     DESCRIPTION = fake.text(max_nb_chars=50),
            #     REGION_ID = random.randint(1,150),
            #     COUNTRY_ID = random.randint(1,150),
            #     PL_CLEARDOWN_ACCOUNT = fake.text(max_nb_chars=50),
            #     IS_CONVERSION = fake.text(max_nb_chars=50),
            #     CONVERSION_DATE = fake.date(),
            #     LAST_MOD_TS = fake.date_time(),
            #     DBP_IN_SCOPE = random.randint(0, 1),
            #     DBP_BEGIN_DATE = fake.date(),
            #     )
            # except:
            #     pass

        
        # RD Book
        for _ in range(15):
            # try:
            if(1):
                RD_BOOK.objects.create(
                BOOK_ID = RD_BOOK.getNextId(),
                LEGAL_ENTITY_CODE = random.choice(ER_LEGAL_ENTITY.objects.all()),
                TRADER_BOOK_NAME = fake.text(max_nb_chars=50),
                PROFIT_CTR = fake.text(max_nb_chars=50),
                ACCOUNTING_TREATMENT =  fake.text(max_nb_chars=50),
                REGULATORY_REPORTING_TREAT =  fake.text(max_nb_chars=50),
                SETTLEMENT_SYSTEM_NAME =  fake.text(max_nb_chars=50),
                SETTLEMENT_SYSTEM_ACCOUNT = random.choice(ER_ACCOUNT.objects.all()) ,
                TRADER_BOOK_SOURCE_SYS =  fake.text(max_nb_chars=50),
                GLOBAL_TRADER_BOOK_FUNCTION =  fake.text(max_nb_chars=50),
                PRIMARY_LD_BOOK =  fake.text(max_nb_chars=50),
                BUS_OWNER_CODE =  random.randint(1,15),
                BUS_OWNER_NAME =  fake.text(max_nb_chars=50),
                BUS_LEV =  fake.text(max_nb_chars=50),
                BUS_LEV_NAME =  fake.text(max_nb_chars=50),
                SUB_LEDGER1_TYPE =  fake.text(max_nb_chars=50),
                SUB_LEDGER1_SYS =  fake.text(max_nb_chars=50),
                SUB_LEDGER2_TYPE =  fake.text(max_nb_chars=50),
                SUB_LEDGER2_SYS =  fake.text(max_nb_chars=50),
                BOOK_STATUS =  fake.text(max_nb_chars=50),
                X_PLATFORM_FLAG =  random.randint(0,1),
                XML_COLUMN =  fake.text(max_nb_chars=50) ,
                VALID_TO=fake.date(),
                VALID_FROM = fake.date(),
                RECORD_START=fake.date(),
                RECORD_END=fake.date(),
                RD_BOOK_IS_ACTIVE =  random.randint(0,1),
                RD_BOOK_VERSION =  fake.text(max_nb_chars=50),
                RD_BOOK_SOURCE =  fake.text(max_nb_chars=50),
                LOCATION =  fake.text(max_nb_chars=50),
                LAST_MOD_TS =  fake.text(max_nb_chars=50),
                MANAGED_BY =  fake.text(max_nb_chars=50),
                BUSINESS_AREA =  fake.text(max_nb_chars=50),
                MIS3_SIGN_OFF =  fake.text(max_nb_chars=50),
                SUBLEDGER_ACCOUNTING =  fake.text(max_nb_chars=50),
                PV_SUBLEDGER_ACCOUNTING =  fake.text(max_nb_chars=50),
                VALUATION_BOOK_SYSTEM_NAME =  fake.text(max_nb_chars=50),
                RD_ORIGINAL_SOURCE =  fake.text(max_nb_chars=50),
                SUB_LEDGER3_TYPE =  fake.text(max_nb_chars=50),
                SUB_LEDGER3_SYS =  fake.text(max_nb_chars=50),
                SUBFUNCTION_CODE =  random.randint(1,15),
                DOCUMENT_ID =  random.randint(1,15),
                EPE_NON_TRADING = fake.text(max_nb_chars=50),
                RD_BOOK_ID_SOURCE =  fake.text(max_nb_chars=50),
                PRIMARY_TRADER_LOCATION =  fake.text(max_nb_chars=50),
                PORTFOLIO_NAME =  fake.text(max_nb_chars=50),
                IFRS9_ACC_CATEGORY_CODE =  random.randint(1,15),
                IFRS9_ACC_CATEGORY_NAME =  fake.text(max_nb_chars=50),
                UBR_FA_CODE =random.randint(1,15))
        # except:
            # pass
        