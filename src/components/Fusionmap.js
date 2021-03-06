import React, { Component } from "react";
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
  Marker
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 29.737786, lng: -95.539293 }}
  >
    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
        }
      }}
    />
    <Marker
      position={{ lat: 29.737786, lng: -95.539293 }}
      onClick={this.onMarkerClick}
      label={"Help high waters"}
    />
    <Marker
      position={{ lat: 29.7422, lng: -95.538457 }}
      onClick={this.onMarkerClick}
      label={"Out of power"}
    />
    <Marker
      position={{ lat:29.737430, lng:-95.322605 }}
      onClick={this.onMarkerClick}
      label={"Need water"}
    />
  </GoogleMap>
));

export default MapWithAFusionTablesLayer;
