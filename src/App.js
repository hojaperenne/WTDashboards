import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherDashboard from '/workspace/WTDashboards/src/WeatherDashboard'; // Importa el componente existente
import TransportDashboard from '/workspace/WTDashboards/src/TransportDashboard'; // Importa el nuevo componente de transporte

const MainContainer = styled.div`
  display: flex;
  flex-direction: column; /* Para colocar los dashboards en filas */
  height: 100vh;
`;

const DashboardContainer = styled.div`
  flex: 1;
  width: 100%; /* Ocupa el 100% del ancho */
  height: 500px;
  display: flex;
  /*justify-content: center;  Centra horizontalmente */
  /* align-items: center; Centra verticalmente */
  /* overflow: hidden; Evita barras de desplazamiento horizontal */
`;

class App extends Component {
  render() {
    return (
      <div>
        <MainContainer>
          <DashboardContainer>
            <WeatherDashboard />
          </DashboardContainer>
          <DashboardContainer>
            <TransportDashboard />
          </DashboardContainer>
        </MainContainer>
      </div>
    );
  }
}

export default App;