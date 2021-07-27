import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import useHooks from '../UseHooks/useHooks.js';
import React, {Component,useEffect, useState, useMemo} from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import Loader from 'react-loader-spinner';
import Dropdown from '../DropDown/Dropdown';
import Bars from './Bars';
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const Charts = () => {
//  const [highException, setData1] = useState([]);
//  const [lowException, setData2] = useState([]);
//  const [filtered, setData3] = useState([]);
   const [loading, setLoading] = useState(true)
   const [highException, lowException, filtered] = useHooks();

  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      // const response = await fetch('http://localhost:8000/getProcessedRecords/');      
      // const body = await response.json();      
      // const records = body;
      // const response_filter = await fetch('http://localhost:8000/getFilteredRecords');      
      // const body_filter = await response_filter.json();      
      // const records_filter = body_filter;

      //   const highException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
      //   item.exception_Region === user.region && 
      //   item.exception_level === "HIGH").length
      //   const lowException = records.filter(item => item.exception_BusinessLine === user.businessLine && 
      //   item.exception_Region === user.region && 
      //   item.exception_level === "LOW").length
      //   const filtered = records_filter.filter(item => item.business_line === user.businessLine && 
      //   item.region === user.region).length
      //   console.log("lowException chart", lowException)
      //   setData1(highException);
      //   setData2(lowException);
      //   setData3(filtered);
        setTimeout(() => setLoading(false), 500);
        //console.log(user_records);
      
  };
    doFetch();
  }, []);
 
  const total = filtered+highException+lowException+10;
  

      return (
      <>
     {loading === false ? (
      <div className="Chart"> 
      
       <Pie
       
        data={{
          labels: ['Filtered (in %)', 'High Exception (in %)', 'Low Exception (in %)', 'Processed (in %)'],
          datasets: [
            {
              
              // data: [Math.round((filtered/total)*100),Math.round((highException/total)*100),Math.round((lowException/total)*100),Math.round((10/total)*100)],
              data : [filtered, highException, lowException, 10],
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
            
            plugins:{
              
                datalabels: {
                 
                  render:'percentage',
                  position:'outside',
                 color: '#000000',
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
    ) : (
        <div style={{marginTop:60, marginLeft:180}}><Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>

      )}
    </>
    );
   
  
}


export default Charts;