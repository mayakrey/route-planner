export const createGPXFile = (positions) => {
  let gpxTrack;
  let gpxStart = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <gpx xmlns="https://www.topografix.com/GPX/1/1" version="1.1" 
  xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 
  https://www.topografix.com/GPX/1/1/gpx.xsd"><trk><trkseg>`;
  let gpxEnd = '</trkseg></trk></gpx>';

  positions.forEach(item => {
    gpxTrack += `<trkpt lat="${item.lat}" lon="${item.lng}"></trkpt>`;
  })

  const gpxFile = `${gpxStart}${gpxTrack}${gpxEnd}`;

  return 'data:text/json;charset=utf-8,' + gpxFile;
}