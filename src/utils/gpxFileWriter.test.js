import '@testing-library/react';
import {createGPXFile} from './gpxFileWriter';

test('renders createGPXFile component', () => {
  const expectedGPXString = `data:text/json;charset=utf-8,<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <gpx xmlns="https://www.topografix.com/GPX/1/1" version="1.1" 
  xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 
  https://www.topografix.com/GPX/1/1/gpx.xsd"><trk><trkseg>undefined<trkpt lat="1212" lon="34325"></trkpt><trkpt lat="1212" lon="34325"></trkpt></trkseg></trk></gpx>`;

  const result = createGPXFile([{lat: 1212, lng: 34325}, {lat: 1212, lng: 34325}]);

  expect(result).toBe(expectedGPXString);
});
