import React from 'react'
import './barChart.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = (props) => {
    const {data, text} = props

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {

               display: false
            },
            x: {
                grid: {
                   display: false
                }
             }
         },
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: text,
                align: "start",
            },
        },
    };
    
  return (
    <div className='BarChart'>
        <Bar data={data} options={options} />
    </div>
  )
}

export default BarChart