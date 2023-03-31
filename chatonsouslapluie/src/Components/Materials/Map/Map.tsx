import * as React from "react";
import classes from "./classes.module.scss";
import Map from "react-map-gl";
import Head from "next/head";
import mapboxgl from "mapbox-gl";
import MapV2 from "../MapV2/MapV2";

interface MapProps {}

interface MapState {}

class MapMaterial extends React.Component<MapProps, MapState> {
  MAPBOX_TOKEN =
    "pk.eyJ1Ijoicm9tYWluYmFiYSIsImEiOiJjbGZ3Y3V0MnowMW4zM2pwaGI1Nm84cnJoIn0.xanu04CF6MksPu8vfB4qWw";
  constructor(props: MapProps) {
    super(props);
    this.state = {};
  }
  public override render() {
    return (
      <div>
        <Head>
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.13.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <script
          src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"
          defer
        ></script>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={this.MAPBOX_TOKEN}
        />
      </div>
    );
  }
}

export default MapMaterial;
