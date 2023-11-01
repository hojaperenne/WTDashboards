import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherCurrent from '/workspace/WTDashboards/src/sub/WeatherCurrent'; // Subcomponente para la información actual
import WeatherMinMax from '/workspace/WTDashboards/src/sub/WeatherMinMax.js'; // Subcomponente para temperatura mínima y máxima
import WeatherHourly from '/workspace/WTDashboards/src/sub/WeatherHourly'; // Subcomponente para la temperatura a lo largo del día
import WeatherDetails from '/workspace/WTDashboards/src/sub/WeatherDetails'; // Subcomponente para detalles adicionales
import WeatherRiseSet from '/workspace/WTDashboards/src/sub/WeatherRiseSet';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%; /* Columna 1: 30%, Columna 2: 70% */
  gap: 10px; /* Espacio entre las columnas */
  width: 100vw;
  padding: 10px;
  background-color: #9fc5e8;
`;

const Column1 = styled.div`
  grid-column: 1 / 2; /* Primera columna */
  display: flex;
  flex-direction: column;
  background-color: #9fc5e8;
  flex: 1;
  gap: 10px;
`;

const Column2 = styled.div`
  grid-column: 2 / 3; /* Segunda columna */
  display: flex;
  flex-direction: column;
  background-color: #9fc5e8;
  display: flex;
  gap: 10px;
`;

class WeatherDashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Column1>
          <WeatherCurrent />
          <WeatherMinMax />
          <WeatherRiseSet />
        </Column1>
        <Column2>
          <WeatherHourly />
          <WeatherDetails />
        </Column2>
      </DashboardContainer>
    );
  }
}

export default WeatherDashboard;