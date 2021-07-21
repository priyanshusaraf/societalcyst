import React, { useState, useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [geoJson, setGeoJson] = useState(null);
  const position = [20.5937, 78.9629];
  const positions = [
    [25.0961, 85.3131],
    [28.7041, 77.1025],
    [26.2006, 92.9376],
    [33.2778, 75.3412],
  ];

  const fetchGeoJson = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IND.geojson"
      );
      // https://raw.githubusercontent.com/inmagik/world-countries/master/countries/IND.geojson
      // https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States
      console.log(res.data);
      setGeoJson(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGeoJson();
  }, []);

  function style(feature) {
    return {
      fillColor: "#FFB6C1",
      weight: 2,
      opacity: 1,
      color: "#FFB6C1", //Outline color
      fillOpacity: 1,
    };
  }

  return (
    <div className="map h-96 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10 rounded-xl overflow-hidden">
      <MapContainer
        center={position}
        style={{ height: "100%", width: "100%" }}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((arr) => (
          <Marker position={arr}>
            {/* <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> */}
          </Marker>
        ))}
        {geoJson && <GeoJSON data={geoJson} style={style} />}
      </MapContainer>
    </div>
  );
}

export default Map;
