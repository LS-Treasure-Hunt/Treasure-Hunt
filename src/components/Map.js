import React from "react";
import Room from "./Room";

const Map = ({ map }) => {
  let worldMap = Object.values(map);

  return (
    <div className="placementTest">
    <div className="map">
      {worldMap.map((room, i) => (
        <Room
          room={room}
          roomId={room.room_id}
          coordinates={room.coordinates}
          exits={room.exits}
          key={i}
        />
      ))}
    </div>
    </div>
  );
};

export default Map;
