import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  
  let beneficios = [0, 61, 22, 53, 34, 5, 96, 71, 18, 49, 10, 11, 12];
  let horas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  let midata = {
    labels: horas,
    datasets: [
      {
        label: 'Beneficios',
        data: beneficios,
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };
  
  let misoptions = {
  
  };
  
  export default function LinesChart(){
    return <Line data={midata} options={misoptions}/>
  }
  