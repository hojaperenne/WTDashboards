import React, { Component } from 'react';
import styled from 'styled-components';

const WeatherCurrentContainer = styled.div`
  background-color: #cfe2f3;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Temperature = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
`;

//const WeatherIcon = styled.img`
//  max-width: 100px;
//`;

class WeatherCurrent extends Component {
  // ... Tu lógica existente para obtener datos y establecer el estado

  render() {
    // Extrae los datos del estado o props
    //const { temperature, day, time, weatherIcon } = this.state;

    return (
      <WeatherCurrentContainer>
        <Temperature>{/*{temperature}*/}22°C</Temperature>
        <div>{/*{day}*/}25/11/1989</div>
        <div>{/*{time}*/}11:00</div>
        {/*<WeatherIcon src={weatherIcon} alt="Weather Icon" />*/}
      </WeatherCurrentContainer>
    );
  }
}

export default WeatherCurrent;
