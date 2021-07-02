from django.db import models
from .models import Book,Transaction,Customer

Data={
"book":[{
"book_id":1,    
"name":"Sakshi",
"Type":"OTC",
"Location":"Mumbai",
},
{
"book_id":2,  
"name":"Laksh",
"Type":"FX",
"Location":"Mumbai",
},
{
"book_id":3,    
"name":"Jai",
"Type":"LD",
"Location":"Navi-Mumbai",
},
{
"book_id":4,    
"name":"Aashna",
"Type":"EQ",
"Location":"Navi-Mumbai",
},
{
    "book_id":2,    
    "name":None,
    "Type":"EQ",
    "Location":"Navi-Mumbai",
    },
],

"customer":[
{
 "cust_id":1,
 "name": 'Rohan',

},
{
    "cust_id":2,
   "name":'Abhijit',
},
{
  "cust_id":3,
  "name":'Shilpa',  
},
{
  "cust_id":4,
 " name":'Ashish',  
},
],

"transaction":[
    {
     "transaction_id":1,
     "book_id": 1,
     "cust_id": 1,
     " transaction_timestamp":"ABC",
     "transaction_type":"DR",
     "linked_transaction":2,    
    },

    {
   " transaction_id":2,
    "book_id": 1,
    "cust_id": 2,
    "transaction_timestamp":"XYZ",
   " transaction_type":"CR",
    "linked_transaction":1,
   },
   {
    "transaction_id":3,
    "book_id": 2,
    "cust_id": 3,
    "transaction_timestamp":"QWE",
   "transaction_type":"DR",
    "linked_transaction":4,
   },
   {
   " transaction_id":4,
    "book_id": 2,
    "cust_id": 3,
   " transaction_timestamp":"ZXC",
   " transaction_type":"CR",
   " linked_transaction":3,
   },
   {
   "transaction_id":5,
   "book_id": 3,
   "cust_id": 1,
   "transaction_timestamp":"BNM",
   "transaction_type":"DR",
   "linked_transaction":None,
   }
]
}


for i in Data[0]:
    print(i)
