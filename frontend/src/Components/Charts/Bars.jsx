import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
// import useHooks from '../UseHooks/useHooks.js';

import React, {Component,useEffect, useState, useMemo} from 'react'
import {Bar} from 'react-chartjs-2';
import Loader from 'react-loader-spinner';

import Charts from './Charts';

const Bars = () => {

 const [highException_tailayer, setData1] = useState([]);
 const [filtered_tailayer, setData2] = useState([]);
 const [filtered_tainbound, setData3] = useState([]);
 const [highException_accounting, setData4] = useState([]);
 const [lowException_tailayer, setData5] = useState([]);
 const [lowException_accounting, setData6] = useState([]);
const [loading, setLoading] = useState(true)
//  const [filteredTailayer,
// filteredTainbound,
// highExceptionTailayer,
// lowExceptionTailayer,
// highExceptionAccounting,
// lowExceptionAccounting
// ] = useHooks();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
      const doFetch = async () => {
      const response = await fetch(`http://localhost:8000/getCacheData/bl=${user.businessLine}/region=${user.region}`);      
      const body = await response.json();      
      const records = body;
      const response_filter = await fetch(`http://127.0.0.1:8000/getFilterCacheData/bl=${user.businessLine}/region=${user.region}`);      
      const body_filter = await response_filter.json();      
      const records_filter = body_filter;
      const highException_tailayer = records.filter(item => 
        item.exception_level.toUpperCase() === "HIGH" && item.exception_component === "TAILAYER").length
        setData1(highException_tailayer)
       const filtered_tailayer = records_filter.filter(item => item.filter_component === "TAILAYER").length
        setData2(filtered_tailayer);
        const filtered_tainbound = records_filter.filter(item => item.filter_component === "TAINBOUND").length
        setData3(filtered_tainbound);
        const highException_accounting = records.filter(item => 
        item.exception_level.toUpperCase() === "HIGH" && item.exception_component === "Accounting").length
        setData4(highException_accounting)
        const lowException_accounting = records.filter(item => 
        item.exception_level.toUpperCase() === "LOW" && item.exception_component === "Accounting").length
        setData6(lowException_accounting)
        const lowException_tailayer = records.filter(item => 
        item.exception_level.toUpperCase() === "LOW" && item.exception_component === "TAILAYER").length
        setData5(lowException_tailayer)
        setTimeout(() => setLoading(false), 500)

        //console.log(user_records);
      
    };
    doFetch();
  }, []);
  
  
  
    /*
    if (this.state.loading) {
      return <div style={{marginTop:120, marginLeft:230}}><Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }*/

    
    return (
      <>
     {loading === false ? (
      <div className="BarChart"> 
      
       <Bar
       
        data={{
          labels: ['Filtered', 'Low Exception','High Exception','Processed'],
          datasets: [
            
            {
              label: 'TA Inbound Layer',
              data: [filtered_tainbound,0,0,0],
              backgroundColor: [
                '#FFC996',
                '#FF8474',
              ],
              borderColor: [
                '#FFC996',
                '#FF8474',
                
              ],
              borderWidth: 1,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              
              
            },
            {
              label: 'TAI Layer',
              data: [filtered_tailayer,lowException_tailayer,highException_tailayer,0],
              backgroundColor: [
                '#FF8474',
                '#FF8474',
                
               
              ],
              borderColor: [
                '#FF8474',
                '#FF8474',
                
                
                
              ],
              borderWidth: 1,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              
            },
            {
              label: 'Accounting',
              data: [0,lowException_accounting,highException_accounting,10],
              backgroundColor: [
                
                '#9F5F80',
               
              ],
              borderColor: [
                
               '#9F5F80',
                
                
              ],
              borderWidth: 1,
              categoryPercentage: 1.0,
              barPercentage: 1.0,

            },

          ],
        }}
        height={320}
        width={200}
        
        options = {{  
           
            scales: {    
              
                x: {
                  grid: {
                     display: false
                    },
                  
                },
                y: {
                   grid: {
                    display: false
                    },
                   
                }
           },
            plugins:{
                datalabels: {
                 display:false,
                },
                legend:{
                    display:true,
                    position:"bottom",
                    labels:{
                        boxWidth:20,
                        boxHeight:20,
                        font:{
                            family:"Quicksand",
                            style:"normal",
                            size: 18,
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
        <div style={{marginTop:100, marginLeft:200}}><Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>

      )}
    </>
  );
  
  
}

export default Bars;
