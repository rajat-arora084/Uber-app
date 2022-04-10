import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useRef, useState } from "react";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXJvcmFyYWphdDA4NCIsImEiOiJjbDFoMHd5eHcwNW5mM2RuM2picXJieTN4In0.yyqnP24UypGjlOoOvB7ywg";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapState, setMapState] = useState({
    langitude: "78.3831",
    latitude: "17.4491",
    zoom: 15,
  });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    console.log(mapState);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [mapState?.langitude, mapState?.latitude],
      zoom: mapState?.zoom,
    });
    // var m = new mapboxgl.Marker()
    //   .setLngLat([mapState?.langitude, mapState?.latitude])
    //   .addTo(map);
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setMapState((prev) => {
        return {
          ...prev,
          langitude: map.current.getCenter().lng.toFixed(4),
          latitude: map.current.getCenter().lat.toFixed(4),
          zoom: map.current.getZoom().toFixed(2),
        };
      });
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {mapState?.langitude} | Latitude: {mapState?.langitude} |
        Zoom: {mapState?.zoom}
      </div>
      <div className="zoom-controls d-flex flex-column">
        <button
          onClick={() =>
            setMapState((prev) => {
              return {
                ...prev,
                zoom: mapState?.zoom + 1,
              };
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            setMapState((prev) => {
              return {
                ...prev,
                zoom: mapState?.zoom - 1,
              };
            })
          }
        >
          -
        </button>
      </div>
      <div ref={mapContainer} className="map-container" id="map" />
    </div>
  );
};
export default Map;
