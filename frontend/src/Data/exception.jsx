const exception = [
    { exception_no: 1, exception_layer:"tailayer",exception_type:"high",exception_name:"requiredFieldEmpty",exception_desc:"required field is empty" },
    { exception_no: 2, exception_layer:"tailayer",exception_type:"high",exception_name:"dataProvision",exception_desc:"Input data is missing vital information" },
    { exception_no: 3, exception_layer:"tailayer",exception_type:"high",exception_name:"scopeGap",exception_desc:"Input data is out of accounting scope for this schema"},
    { exception_no: 4, exception_layer:"accountinglayer",exception_type:"high",exception_name:"rulesOtherwise",exception_desc:"Rule engine exception" },  
  ];
export default exception;