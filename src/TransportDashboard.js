import React, { Component } from 'react';
import styled from 'styled-components';
import TransportMap from '/workspace/WTDashboards/src/resources/TransportMap';
import "/workspace/WTDashboards/src/App.css";

const TransportDashboardContainer = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%; /* Ocupa todo el ancho de su contenedor */
  box-sizing: border-box; /* Incluye el padding en el ancho total */
`;

const TransportDashboard = () => {
  return (
    <TransportDashboardContainer>
      <TransportMap />
    </TransportDashboardContainer>
  );
}

export default TransportDashboard;
