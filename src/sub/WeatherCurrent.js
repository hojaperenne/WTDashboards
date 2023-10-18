import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import WeatherCode from '/workspace/WTDashboards/src/resources/WeatherCode.json'; // Importa el JSON con las rutas de las imágenes

const WeatherCurrentContainer = styled.div`
  background-color: #cfe2f3;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WeatherData = styled.div`
  /* Estilos para la columna izquierda con datos */
`;

const Temperature = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Time = styled.div`
  font-size: 20px;
  //font-weight: bold;
  margin-bottom: 10px;
`;

const Hour = styled.div`
  font-size: 20px;
  //font-weight: bold;
  margin-bottom: 10px;
`;
const WeatherImage = styled.img`
  max-width: 75%;
  height: auto;
  position: relative;
`;

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-34.7845&longitude=-58.1783&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo'; // Reemplaza con la URL de la API de clima

function WeatherCurrent() {
  const [weatherData, setWeatherData] = useState({
    is_day: null,
    weathercode: null,
    temperature: null,
    time: null,
  });

  useEffect(() => {
    // Realiza una solicitud a la API para obtener datos de clima
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Actualiza el estado con los datos de la API
        setWeatherData({
          is_day: data.current_weather.is_day,
          weathercode: data.current_weather.weathercode,
          temperature: data.current_weather.temperature,
          time: data.current_weather.time,
        });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  },);

  const { is_day, weathercode, temperature, time } = weatherData;

  const imageSrc = `https://raw.githubusercontent.com/hojaperenne/WTDashboards/gh-pages/Icons/${weathercode}_${is_day}.png`;

  const formattedTime = new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedDate = new Date(time).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <WeatherCurrentContainer>
      <WeatherData>
        <Temperature>{temperature}°C</Temperature>
        <Time>{formattedDate}</Time>
        <Hour>{formattedTime}</Hour>
      </WeatherData>
      <div>
        <WeatherImage src={imageSrc} alt="Weather" />
      </div>
    </WeatherCurrentContainer>
  );
}

export default WeatherCurrent;