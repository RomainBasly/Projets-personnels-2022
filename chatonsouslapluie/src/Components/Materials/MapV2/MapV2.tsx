import * as React from "react";
import { Component } from "react";
import mapboxgl from "mapbox-gl";
import classes from "./classes.module.scss";

import Head from "next/head";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9tYWluYmFiYSIsImEiOiJjbDhhYTJ5azcwM3VtM3BxcXB6aHE3cjR1In0.xAXtN4sbF_LIwMRcO4fkrg";

interface MapV2Props {}

interface MapV2State {
  lng: number;
  lat: number;
  zoom: number;
}

class DraggableMarker extends Component<MapV2Props, MapV2State> {
  mapContainer: React.RefObject<HTMLDivElement>;
  constructor(props: MapV2Props | Readonly<MapV2Props>) {
    super(props);
    this.state = {
      lng: -71.1367,
      lat: 42.2792,
      zoom: 15,
    };
    this.mapContainer = React.createRef<HTMLDivElement>();
  }

  public override render() {
    const { lng, lat, zoom } = this.state;
    return (
      <div className={classes["root"]}>
        {/* <Head>
          <link
            href="https://api.tiles.mapbox.com/mapbox-gl-js/vmapbox-gl@2.13.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <script
          src="https://api.mapbox.com/mapbox-gl-js/v2.13.0/mapbox-gl.js"
          defer
        ></script> */}
        <div
          id="myMapContainer"
          ref={this.mapContainer}
          className={classes["mapContainer"]}
        />
        <div id="myCoordinates" className={classes["coordinates"]} />
      </div>
    );
  }

  public override componentDidMount() {
    const { lng, lat, zoom } = this.state;
    console.log("mounted");
    const map = new mapboxgl.Map({
      container: this.mapContainer.current ?? "",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    console.log(map);
    const marker = new mapboxgl.Marker({
      draggable: true,
      offset: [550, -150],
      ...({ className: "mapboxgl-marker" } as any),
    })
      .setLngLat(map.getCenter())
      .addTo(map);

    const onDragEnd = () => {
      const lngLat = marker.getLngLat();
      this.setState({
        lng: lngLat.lng,
        lat: lngLat.lat,
      });
    };

    marker.on("dragend", onDragEnd);
  }

  public componentDidUpdate() {
    console.log(this.state.lat);
  }
}

export default DraggableMarker;
