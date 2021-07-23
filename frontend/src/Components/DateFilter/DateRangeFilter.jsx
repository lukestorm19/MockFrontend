// import React, { useState } from 'react';
// import './DateFilter.css';
// function DateFilter(){
//     const [date, setDate] = useState({
//         sd: new Date(),
//         ed: new Date().toLocaleDateString(),
//       });

//     function getData(sd,ed){
//         const doFetch = async () => {
//           const response = await fetch('https://mocki.io/v1/ce62db04-c3ee-43e3-b410-b36c180149b4');
//           const body = await response.json();
//           const records = body;
//           const user_records = records.filter(item => item.exception_BusinessLine === user.businessLine
//              && item.exception_Region === user.region
//              && item.exception_COBDT>=sd && item.exception_COBDT>=ed)
//           console.log(user_records);
//           setData(user_records);
//         };
//         doFetch();   
//     }
   
//     function handleChange(event){
//         const { value, name } = event.target;
//         setDate(prevValue => {
//         if (name === "sd") {
//         return {
//          sd : value,
//          ed : prevValue.ed
//         };
//         }
//         else if (name === "ed") {
//         return {
//           sd: prevValue.sd,
//           ed: value
//         };
//       }
//     });
//     getData(date.sd,date.ed);
//     }   
//     return (
//         <div style={{marginLeft:500}}>
//         <input style={{width:"150px"}}
//           name="sd"
//           type="date"
//           onChange={handleChange}
//         />      
//         <input style={{width:"150px"}}
//           name="ed"
//           type="date"
//           onChange={handleChange}
//         />    
//         </div>

//    );
// };
 
// export default DateFilter;

/*
import React from 'react'

export default function DateRangeFilter(sd,ed) {
  const [data, setData] = useState([]);
  const doFetch = async () => {
      console.log(sd,ed)
      const response = await fetch('https://mocki.io/v1/ce62db04-c3ee-43e3-b410-b36c180149b4');
      const body = await response.json();
      const records = body;
      var start = new Date(sd);
      var end = new Date(ed);
      var result = records.filter(new Date(item.exception_COBDT)>=new Date(sd) && new Date(item.exception_COBDT)<=new Date(ed))
      setData(result);
    };
  return (
    <div>
      <div style={{paddingBottom:"0px"}}>
        <input style={{width:"150px",marginTop:"40px",marginRight:"10px"}}
          name="sd"
          type="date"
          onChange={handleChange}
          value={start}
        />    
        
        <input style={{width:"150px",marginTop:"40px"}}
          name="ed"
          type="date"
          onChange={handleChange}
          value={end}
        /> 
          
      </div>
    </div>
  )
}
*/