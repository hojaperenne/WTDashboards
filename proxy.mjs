import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

// Ruta que realiza la solicitud a la API de Buenos Aires y reenvía los datos
app.get('/api/buenosaires', async (req, res) => {
  try {
    const response = await fetch(
      'https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6'
    );

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      throw new Error('Error en la solicitud a la API de Buenos Aires');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener datos de la API de Buenos Aires' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
