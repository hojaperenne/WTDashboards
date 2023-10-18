import React, { Component } from 'react';
import styled from 'styled-components';

const WeatherRiseSetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  grid-template-rows: auto auto; /* Dos filas con altura automática */
  gap: 10px; /* Espacio entre elementos */
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #cfe2f3;
`;

const SunLabel = styled.div`
  grid-column: 1 / span 2; /* Ocupa ambas columnas */
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Rise = styled.div`
  grid-row: 2 / 3; /* Fila 2 */
  grid-column: 1 / 2; /* Columna 1 */
  text-align: center;
  font-size: 16px;
`;

const Set = styled.div`
  grid-row: 2 / 3; /* Fila 2 */
  grid-column: 2 / 3; /* Columna 2 */
  text-align: center;
  font-size: 16px;
`;

class WeatherRiseSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sunRise: null,
      sunSet: null,
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData() {
    // Reemplaza 'URL_DE_LA_API' con la URL de la API de clima que estás utilizando
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.7845&longitude=-58.1783&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,is_day&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Aquí puedes extraer los datos necesarios de 'data' y actualizar el estado
        this.setState({
          sunRise: data.daily.sunrise[0].slice(10),
          sunSet: data.daily.sunset[0].slice(10),
        });
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  render() {
    return (
      <WeatherRiseSetContainer>
        <SunLabel>Sunrise & Sunset</SunLabel>
        <Rise>{this.state.sunRise}</Rise>
        <Set>{this.state.sunSet}</Set>
      </WeatherRiseSetContainer>
    );
  }
}

export default WeatherRiseSet;