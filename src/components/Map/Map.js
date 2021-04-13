import React, {useEffect, useContext, useRef} from 'react';
import L, {divIcon} from 'leaflet';
import {PositionContext} from '../../context/positionContext';
import './map.css';

const Map = () => {
  const mapElement = useRef(null);
  const {positions, addPosition} = useContext(PositionContext);

  useEffect(() => {
    let map = L.map(mapElement.current, {
      center: [46.360521, 13.7988974],
      zoom: 13,
      scrollWheelZoom: false,
      layers: [L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })]
    });

    map.on('click', (e) => {
      addPosition(e.latlng)
    });

    let layer = L.layerGroup().addTo(map);

    if (positions && positions.length > 0 ) {
      L.polyline(positions, {}).addTo(map);
      updateMarkers(layer, map, positions);
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [positions]);


  const markerStyles = (index) => {
    return divIcon({html: `<span class="marker">${index}</span>`})
  }

  const updateMarkers = (layer, map, positions) => {
    layer.clearLayers();
    positions.map((item, i) => {
      return L.marker(item, {icon: markerStyles(i + 1)}).addTo(map);
    });
  }

  return (
    <>
      <div className="map" ref={mapElement} data-testid="map"/>
    </>
  );
}

export default Map;