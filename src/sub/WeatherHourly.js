import React, { Component } from 'react';
import styled from 'styled-components';
import LinesChart from '/workspace/WTDashboards/src/resources/Chart';

const WeatherHourlyContainer = styled.div`
  background-color: #cfe2f3;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 40vh;
`;

const Chart = styled.div`
heigth:15vh;
width: 64vw;
/*position: relative;*/
margin: auto;
`;

const HourlyTemperatureList = styled.ul`
  list-style: none;
  padding: 0;
`;


//const HourlyTemperatureItem = styled.li`
//  font-size: 18px;
//  margin-bottom: 10px;
//`;

class WeatherHourly extends Component {
  // ... Tu lógica existente para obtener datos y establecer el estado

  render() {
    // Extrae los datos del estado o props
    //const { hourlyTemperatures } = this.state;

    return (
      <WeatherHourlyContainer>
        <h2>Hourly Temperature</h2>
        <HourlyTemperatureList>
          <Chart><LinesChart /></Chart>
          
          {/*{hourlyTemperatures.map((temperature, index) => (
            <HourlyTemperatureItem key={index}>
              {temperature}°C
            </HourlyTemperatureItem>
          ))}*/}
        </HourlyTemperatureList>
      </WeatherHourlyContainer>
    );
  }
}

export default WeatherHourly;
