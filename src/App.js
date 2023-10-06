import React, { Component } from 'react';
import styled from 'styled-components';
import WeatherDashboard from '/workspace/WTDashboards/src/WeatherDashboard'; // Importa el componente existente
import TransportDashboard from '/workspace/WTDashboards/src/TransportDashboard'; // Importa el nuevo componente de transporte

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 10px;
`;

const DashboardContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 50vh;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  
  @media (min-width: 768px) {
    max-height: 45%;
  }

  @media (min-width: 1024px) {
    max-height: 40%;
  }
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