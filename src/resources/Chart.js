import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const ChartContainer = styled.div`
  /* Estilos anteriores aquí */
`;

export default function LinesChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperature',
        data: [],
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255,216,44)',
        backgroundColor: 'rgb(255,216,44, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgb(255,179,41)',
        pointBackgroundColor: 'rgb(255,179,41)',
      },
    ],
  });

  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos de temperatura y horas
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.7845&longitude=-58.1783&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Formatea las horas para mostrar solo "09:00" en lugar de "2023-10-12T09:00"
      const formattedHours = data.hourly.time.map((hour) => {
        const parts = hour.split('T');
        return parts[1];
      });
        // Actualiza el estado con los datos de la API
        setChartData((prevData) => ({
          ...prevData,
          labels: formattedHours.slice(0, 24),
          datasets: [
            {
              ...prevData.datasets[0],
              data: data.hourly.temperature_2m.slice(0, 24),
            },
          ],
        }));
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <ChartContainer>
      <Line data={chartData} options={{ maintainAspectRatio: false }} />
    </ChartContainer>
  );
}
