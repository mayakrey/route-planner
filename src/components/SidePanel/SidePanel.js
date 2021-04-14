import React, {useContext} from 'react';
import Waypoint from './Waypoint/Waypoint';
import {PositionContext} from '../../context/positionContext';
import {createGPXFile} from '../../utils/gpxFileWriter';
import './sidePanel.css'

const SidePanel = () => {
  const {positions} = useContext(PositionContext);
  const hasMarkers = positions && positions.length > 0;
  const url = hasMarkers ? createGPXFile(positions) : null;

  return (
    <div className="panel-container" data-testid="panel">
      <h1>Route Builder</h1>
      <div className="waypoint-container">
        {hasMarkers && <Waypoint/>}
      </div>
      <a className={`download-btn ${!url ? 'disabled': ''}`} href={url} download="route.gpx">Download your Route</a>
    </div>
  );
};

export default SidePanel;