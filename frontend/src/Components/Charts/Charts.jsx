
import React, {Component} from 'react'
import { Pie, defaults } from 'react-chartjs-2'
import Loader from 'react-loader-spinner';
import Dropdown from '../DropDown/Dropdown';
import Bars from './Bars';
export default class Charts extends Component {
    
  state = {
    loading: true,
    record: null
  };

  async componentDidMount() {
    try{
     const url = "https://mocki.io/v1/371fb4a1-2acd-43d0-85c8-8a3f057435db";
     //const url = "https://mocki.io/v1/371fb4a1-2acd-43d0-85c8-";

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
      return <div style={{marginTop:55, marginLeft:160}}><Loader type="Circles" color="#00BFFF" height={80} width={80} /> </div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }
 
    
    return (
      
      <div className="Chart"> 
      
       <Pie
       
        data={{
          labels: ['Filtered'+ ' '+this.state.record.number_of_records.filtered_records, 'High Exception'+ ' '+this.state.record.number_of_records.high_exception_records, 'Low Exception'+ ' '+this.state.record.number_of_records.low_exception_records, 'Processed'+ ' '+this.state.record.number_of_records.processed_records],
          datasets: [
            {
              
              data: [this.state.record.number_of_records.filtered_records, this.state.record.number_of_records.high_exception_records,this.state.record.number_of_records.low_exception_records,this.state.record.number_of_records.processed_records],
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
  
}


