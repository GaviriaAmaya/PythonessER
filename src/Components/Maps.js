import React, { useState } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as FacilityData from "./data/ERPlaces.json";

function MapwithMarkers() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 4.6097100, lng: -74.0817500 }}
    >
      {FacilityData.IPS_list.map(facility => (
        <Marker
          key={facility.IPS_name}
          position={{
            lat: facility.address.lat,
            lng: facility.address.lng
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
            lat: selectedFacility.address.lat,
            lng: selectedFacility.address.lng
          }}
        >
          <div>
            <h2>{selectedFacility.IPS_name}</h2>
            <p>{selectedFacility.address.address}</p>
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

