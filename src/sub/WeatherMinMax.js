import React, { Component } from 'react';
import styled from 'styled-components';

const WeatherMinMaxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas */
  grid-template-rows: auto auto; /* Dos filas con altura automática */
  gap: 10px; /* Espacio entre elementos */
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #cfe2f3;
`;

const TemperatureLabel = styled.div`
  grid-column: 1 / span 2; /* Ocupa ambas columnas */
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const MinTemperature = styled.div`
  grid-row: 2 / 3; /* Fila 2 */
  grid-column: 1 / 2; /* Columna 1 */
  text-align: center;
  font-size: 16px;
`;

const MaxTemperature = styled.div`
  grid-row: 2 / 3; /* Fila 2 */
  grid-column: 2 / 3; /* Columna 2 */
  text-align: center;
  font-size: 16px;
`;

class WeatherMinMax extends Component {
  // ... Tu lógica existente para obtener datos y establecer el estado

  render() {
    // Extrae los datos del estado o props
    //const { minTemperature, maxTemperature } = this.state;

    return (
      <WeatherMinMaxContainer>
        <TemperatureLabel>Temperature</TemperatureLabel>
        <MinTemperature>Min: {/*{minTemperature}*/}11°C</MinTemperature>
        <MaxTemperature>Max: {/*{maxTemperature}*/}22°C</MaxTemperature>
      </WeatherMinMaxContainer>
    );
  }
}

export default WeatherMinMax;
