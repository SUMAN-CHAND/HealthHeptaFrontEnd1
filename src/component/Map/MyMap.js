import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places']; // Load the Places library for additional features

const MyMap = ({ locations, onLocationUpdate }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    // Update map center based on user-selected location from database
    if (locations && locations.length) {
      setCenter(locations[0].coordinates);
    }
  }, [locations]);

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const handleMarkerClick = (location) => {
    onLocationUpdate(location); // Send selected location back to parent component
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '300px' }}
        center={locations && locations.length ? locations[0].coordinates : { lat: 37.7833, lng: -122.4167 }}
        zoom={11}
        onLoad={handleMapLoad}
      >
        {locations &&
          locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              onClick={() => handleMarkerClick(location)}
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMap;