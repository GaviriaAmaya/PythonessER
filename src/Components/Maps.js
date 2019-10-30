import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as FacilityData from "./data/ERPlaces.json";

function MapwithMarkers() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    >
      {FacilityData.features.map(facility => (
        <Marker
          key={facility.properties.PARK_ID}
          position={{
            lat: facility.coordinates.lat,
            lng: facility.coordinates.lng
          }}
          onClick={() => {
            setSelectedFacility(facility);
          }}
        />
      ))}

      {selectedFacility && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedFacility(null);
          }}
          position={{
            lat: selectedFacility.coordinates.lat,
            lng: selectedFacility.coordinates.lng
          }}
        >
          <div>
            <h2>{selectedFacility.properties.name}</h2>
            <p>{selectedFacility.properties.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(MapwithMarkers));

export default function Map() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLEKEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

