import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  //Title,
  Tooltip,
  //Legend,
  Filler,
} from 'chart.js';

//import { UserData } from "/workspace/WTDashboards/src/resources/Data";
//import { useState } from "react";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    //Title,
    Tooltip,
    //Legend,
    Filler
  );
  
  let temperature = [
    14.3,
    14.0,
    14.2,
    15.5,
    16.8,
    19.0,
    21.3,
    23.2,
    24.8,
    24.2,
    22.9,
    22.4,
    22.4,
    20.1,
    17.2,
    16.0,
    15.5,
    14.8,
    14.2,
    13.5,
    13.0,
    12.8,
    12.5,
    12.4
];
  let hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  
  let midata = {
    labels: hours,
    datasets: [
      {
        label: 'Temperature',
        data: temperature,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255,216,44)',
        backgroundColor: 'rgb(255,216,44, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgb(255,179,41)',
        pointBackgroundColor: 'rgb(255,179,41)',
      },
    ],
  };
  
  let misoptions = {
  maintainAspectRatio: false,
  };
  
  export default function LinesChart(){
    return <Line data={midata} options={misoptions}/>
  }
  