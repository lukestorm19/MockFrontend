import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";

import React, {Component,useEffect, useState, useMemo} from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import Loader from 'react-loader-spinner';
import Dropdown from '../DropDown/Dropdown';
import Bars from './Bars';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

const Charts = () => {
 const [highException, setData1] = useState([]);
 const [lowException, setData2] = useState([]);
 const [filtered, setData3] = useState([]);
 
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch('http://localhost:8000/getProcessedRecords/');      
      const body = await response.json();      
      const records = body;
      const response_filter = await fetch('http://localhost:8000/getFilteredRecords');      
      const body_filter = await response_filter.json();      
      const records_filter = body_filter;

        const highException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "HIGH").length
        const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
        item.exception_Region === user.region && 
        item.exception_level === "LOW").length
        const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
        item.region === user.region).length
        console.log(filtered)
        setData1(highException);
        setData2(lowException);
        setData3(filtered);

        //console.log(user_records);
      
    };
    doFetch();
  }, []);
 
    

      return (
      
      <div className="Chart"> 
      
       <Pie
       
        data={{
          labels: ['Filtered', 'High Exception', 'Low Exception', 'Processed'],
          datasets: [
            {
              
              data: [filtered,highException,lowException,10],
              backgroundColor: [
                '#855CF8',
                '#E289F2',
                '#503795',
                '#B085FF',
               
              ],
              borderColor: [
                '#855CF8',
                '#E289F2',
                '#503795',
                '#B085FF',
                
              ],
              borderWidth: 1,
              
            },
          ],
        }}
        height={200}
        width={200}
        
        options = {{
            label:{
              render:'percentage',
            },
            plugins:{
                datalabels: {
                
                 color: '#ffffff',
                 fontFamily:"Quicksand"
                },
                legend:{
                    display:true,
                    position:"right",
                    labels:{
                       
                       boxWidth:20,
                       boxHeight:20,
                        font:{
                            family:"Quicksand",
                            style:"normal",
                            size: 14,
                            weight:500,
                            
                        },
                        color: "#000000",
                         
                    },
                    color: "#000000",
                    }
            },
            maintainAspectRatio: false,
            responsive: true,
            
        }}
      />
    </div>
    );
   
  
}


export default Charts;