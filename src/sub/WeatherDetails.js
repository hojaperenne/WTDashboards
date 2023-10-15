import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const WeatherDetailsContainer = styled.div`
  background-color: #cfe2f3;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  grid-auto-rows: minmax(50px, auto); /* Altura automática */
  gap: 10px; /* Espacio entre elementos */
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const API_URL_1 = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-34.7845&longitude=-58.1783&&current=carbon_monoxide&timezone=America%2FSao_Paulo'; // Reemplaza con la URL de la primera API
const API_URL_2 = 'https://api.open-meteo.com/v1/forecast?latitude=-34.7845&longitude=-58.1783&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,is_day,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo'; // Reemplaza con la URL de la segunda API

function WeatherDetails() {
  const [airQuality, setAirQuality] = useState(null);
  const [uvIndex, setUvIndex] = useState(null);
  const [windState, setWindState] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [precipitationProbability, setPrecipitationProbability] = useState(null);

  useEffect(() => {
    // Realiza solicitudes a ambas APIs y espera a que se completen
    Promise.all([
      fetch(API_URL_1).then((response) => response.json()), // Primera API
      fetch(API_URL_2).then((response) => response.json()), // Segunda API
    ])
      .then(([api1Data, api2Data]) => {
        // Actualiza el estado con los datos de ambas API
        setAirQuality(api1Data.current.carbon_monoxide);
        setUvIndex(api2Data.daily.uv_index_max[0]);
        setWindState(api2Data.current_weather.windspeed);
        setVisibility(api2Data.hourly.visibility[0]);
        setHumidity(api2Data.hourly.relativehumidity_2m[0]);
        setPrecipitationProbability(api2Data.hourly.precipitation_probability[0]);
      })
      .catch((error) => {
        console.error('Hubo un problema con las solicitudes a las APIs:', error);
      });
  }, []);

  return (
    <WeatherDetailsContainer>
        <DetailContainer>
          <div>UV Index:</div>
          <div>{uvIndex}</div>
        </DetailContainer>
        <DetailContainer>
          <div>Wind:</div>
          <div>{windState} km/h</div>
        </DetailContainer>
        <DetailContainer>
          <div>Air Quality:</div>
          <div>{airQuality}</div>
        </DetailContainer>
        <DetailContainer>
          <div>Visibility:</div>
          <div>{visibility/1000} km</div>
        </DetailContainer>
        <DetailContainer>
          <div>Humidity:</div>
          <div>{humidity}%</div>
        </DetailContainer>
        <DetailContainer>
        <div>Precipitation Probability:</div>
        <div>{precipitationProbability}%</div> 
        </DetailContainer>
    </WeatherDetailsContainer>
  );
}

export default WeatherDetails;