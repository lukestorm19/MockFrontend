import React, {Component} from 'react'
import { Pie, defaults } from 'react-chartjs-2'

export default class Chart extends Component {
  state = {
    loading: true,
    record: null
  };

  async componentDidMount() {
    try{
     const url = "https://mocki.io/v1/371fb4a1-2acd-43d0-85c8-8a3f057435db";
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
      return <div>loading...</div>;
    }

    if (!this.state.record) {
      return <div>didn't get records</div>;
    }
    
    return (
      <div> 
      <Pie
        data={{
          labels: ['Filtered', 'High Exception', 'Low Exception', 'Processed'],
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
        height={300}
        width={300}
        options = {{
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              position:'bottom',
              
              labels: {
                boxWidth: 10,
                boxHeight:10
              }
            }
        }}
      />
    </div>
    );
  }
  
}
/*
const Chart = () => {

  return (
    <div> 
      <Pie
        data={{
          labels: ['Filtered', 'High Exception', 'Low Exception', 'Processed'],
          datasets: [
            {
              
              data: [140,100,120,170],
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
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={350}
        width={350}
        const options = {{
            maintainAspectRatio: false,
            responsive: true,
            legend: {
              position: 'left',
              labels: {
                boxWidth: 10,
                boxHeight:10
              }
            }
        }}
      />
    </div>
  )
}

export default Chart;*/