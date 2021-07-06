import React from 'react'
import { Pie, defaults } from 'react-chartjs-2'



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

export default Chart;