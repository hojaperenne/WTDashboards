import React, { Component } from 'react';
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

class WeatherDetails extends Component {
  // ... Tu lógica existente para obtener datos y establecer el estado

  render() {
    // Extrae los datos del estado o props
    /*const {
      uvIndex,
      windState,
      airQuality,
      visibility,
      humidity,
      sunriseTime,
      sunsetTime,
    } = this.state;*/

    return (
      <WeatherDetailsContainer>
          <DetailContainer>
            <div>UV Index:</div>
            <div>{/*{uvIndex}*/}6</div>
          </DetailContainer>
          <DetailContainer>
            <div>Wind:</div>
            <div>{/*{windState}*/}11.11 km/h</div>
          </DetailContainer>
          <DetailContainer>
            <div>Air Quality:</div>
            <div>{/*{airQuality}*/}105</div>
          </DetailContainer>
          <DetailContainer>
            <div>Visibility:</div>
            <div>{/*{visibility}*/}6.1 km</div>
          </DetailContainer>
          <DetailContainer>
            <div>Humidity:</div>
            <div>{/*{humidity}*/}12%</div>
          </DetailContainer>
          <DetailContainer>
            <div>Sunrise & Sunset:</div>
            <div>{/*{sunriseTime}*/}6:36 A.M.</div>
            <div>{/*{sunsetTime}*/}19:00 P.M.</div>
          </DetailContainer>
      </WeatherDetailsContainer>
    );
  }
}

export default WeatherDetails;
