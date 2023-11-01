import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

class TransportMap extends Component {
  constructor() {
    super();
    this.state = {
      buses: {},
    };
  }

  componentDidMount() {
    // Realiza la primera solicitud a la API de buses
    this.fetchBusData();

    // Programa la actualización cada 31 segundos
    this.interval = setInterval(this.fetchBusData, 31000);
  }

  componentWillUnmount() {
    // Limpia el intervalo cuando el componente se desmonta
    clearInterval(this.interval);
  }

  fetchBusData = () => {
    fetch('http://localhost:3001/api/buenosaires')
    .then((response) => response.json())
    .then((data) => {
      // Actualiza el estado con los datos de los colectivos
      this.updateBusData(data);
    })
    .catch((error) => {
      console.error('Error al obtener los datos de la API de buses', error);
    });
};

updateBusData = (newData) => {
  // Actualiza el estado con los nuevos datos de los colectivos
  this.setState((prevState) => {
    const updatedBuses = { ...prevState.buses };

    newData.forEach((bus) => {
      const busKey = bus.tip_id;
        updatedBuses[busKey].locations.push({
          lat: bus.latitude,
          lon: bus.longitude,
        });
      } 
    );

    return { buses: updatedBuses };
  });
};

render() {
  const { buses } = this.state;
  const initialPosition = [-34.7845, -58.1783]; // Ejemplo de posición inicial en Nueva York

  return (
    <MapContainer center={initialPosition} zoom={10} style={{ height: '100vh' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Object.keys(buses).map((busKey) => {
          const bus = buses[busKey];
          const locations = bus.locations;

          // Si hay al menos dos ubicaciones, muestra un marcador y una línea de conexión
          if (locations.length >= 2) {
            return (
              <div key={busKey}>
                <Polyline positions={locations.map((loc) => [loc.lat, loc.lon])} color="blue" />
                <Marker position={[locations[0].lat, locations[0].lon]}>
                  <Popup>{bus.name}</Popup>
                </Marker>
              </div>
            );
          }

          // Si solo hay una ubicación, muestra solo el marcador
          if (locations.length === 1) {
            return (
              <Marker key={busKey} position={[locations[0].lat, locations[0].lon]}>
                <Popup>{bus.name}</Popup>
              </Marker>
            );
          }

          return null; // No hay ubicaciones para mostrar
        })}
      </MapContainer>
  );
}
}

export default TransportMap;