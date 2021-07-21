import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import Loader from 'react-loader-spinner';

import Charts from './Charts';

export default class Bars extends Component {

  state = {
    loading: true,
    record: null
  };

  async componentDidMount() {
    try{
    const url = "https://mocki.io/v1/e5da5eb9-979a-4ae4-ab92-8db601e881fd";

     //const url = "https://mocki.io/v1/e5da5eb9-979a-4ae4-ab92-";
     const response = await fetch(url);
     const data = await response.json();
     this.setState({record:data, loading:false});
   }
    catch(err){
     console.log(err)
   }
   
  }
  
  
  render() {
    
    if (this.state.loading) {
      return <div style={{marginTop:120, marginLeft:230}}><Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }
    
    
    return (
      
      
      <div className="BarChart"> 
      
       <Bar
       
        data={{
          labels: ['Filtered', 'Low Exception','High Exception','Processed'],
          datasets: [
            
            {
              label: 'TA Inbound Layer',
              data: [this.state.record.TAINBOUND.filtered,0,0,0],
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
              data: [this.state.record.TAILAYER.filtered,this.state.record.TAILAYER.low_exception,this.state.record.TAILAYER.high_exception,0],
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
              data: [0,this.state.record.Accounting.low_exception,this.state.record.Accounting.high_exception,this.state.record.Accounting.processed],
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
        height={400}
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
  
    );
  }
  
}
