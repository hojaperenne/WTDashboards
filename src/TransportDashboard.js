import React, { Component } from 'react';
import styled from 'styled-components';

const TransportDashboardContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ocupa todo el ancho de su contenedor */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
`;

class TransportDashboard extends Component {
  render() {
    return (
      <TransportDashboardContainer>
        <h2>Transport Dashboard</h2>
        {/* Agrega aquí los subcomponentes y datos relacionados con el transporte */}
      </TransportDashboardContainer>
    );
  }
}

export default TransportDashboard;
