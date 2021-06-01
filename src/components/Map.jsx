/* eslint-disable prettier/prettier */
import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapContainerStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyB9v4LDNdjk2PI9m36eKVd9mgs1qeh7FyU">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
