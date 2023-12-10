// import { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const PieChart = (props) => {
    const {amount} = props
    const data = {
        // labels: ['Amount Received', 'Amount Pending'],
        labels: amount.map(item => item.label),
        datasets: [
          {
            data: amount.map(item => item.amount),
            backgroundColor: amount.map(item => item.color),
            labels: amount.map(item => item.label),
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            display: false,
            position: "bottom",
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              borderRadius: 5
            },
          }
        }
      };
    
  return (
    <div style={{ width: '90%', maxWidth: '300px', margin: '1rem auto' }}>
      <Doughnut data={data} options={options} />
    </div>
    )
}

export default PieChart