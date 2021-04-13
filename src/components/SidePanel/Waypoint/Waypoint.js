import React, {useEffect, useContext, useState} from 'react';
import {ReactComponent as DeleteIcon} from './delete-icon.svg';
import {ReactComponent as DragIcon} from './drag-icon.svg';
import {PositionContext} from '../../../context/positionContext';
import './waypoint.css';

const Waypoint = () => {
  const {positions, deletePosition} = useContext(PositionContext);
  const [waypoints, setWaypoints] = useState(positions);

  useEffect(() => {
    setWaypoints(positions)
  }, [positions])

  const handleDelete = (event, item) => {
    const updatedWaypoints = [...waypoints.filter(p => p !== item)]
    setWaypoints(updatedWaypoints);
    deletePosition(item);
  }

  return (
    (waypoints && waypoints.length > 0) ?
      (waypoints.map((item, i) => {
        return <div key={i} className="waypoint-item" data-testid="waypoint">
          <div><DragIcon className="drag-icon"/> Waypoint {i + 1}</div>
          <div><DeleteIcon id={i} className="delete-icon" title="Remove Waypoint" onClick={e => handleDelete(e, item)}/></div>
        </div>
      })
    ) : null
  )
}

export default Waypoint;