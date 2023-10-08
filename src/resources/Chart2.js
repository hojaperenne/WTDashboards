import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ data }) => {
  // Extraer los datos de tiempo y temperatura del objeto data
  const timeData = data.hourly.time;
  const temperatureData = data.hourly.temperature_2m;

  // Crear un objeto de datos para el gráfico
  const chartData = {
    labels: timeData,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatureData,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  // Opciones de configuración del gráfico
  const chartOptions = {
    scales: {
      x: {
        type: 'time', // Especificar que el eje x contiene datos de tiempo
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Hourly Temperature Chart</h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default TemperatureChart;
