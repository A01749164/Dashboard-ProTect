import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3';

const MyHeatmapComponent = ({ coordinates }) => {
  const points = coordinates.map(({ lat, lng }) => [lat, lng]);

  return (
    <MapContainer center={[19.595877317028975, -99.22735453859039]} zoom={16} style={{ height: '500px' }}>
    <TileLayer 
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <HeatmapLayer 
      points={points}
      longitudeExtractor={(m) => m[1]}
      latitudeExtractor={(m) => m[0]}
      intensityExtractor={(m) => 1}
    />
    </MapContainer>
  );
};

export default MyHeatmapComponent;
