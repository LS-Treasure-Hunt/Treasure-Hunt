import React from "react";
import Room from "./Room";

const Map = ({ map }) => {
  let worldMap = Object.values(map);

  return (
    <div className="map">
      {worldMap.map(room => (
        <Room
          roomId={room.room_id}
          coordinates={room.coordinates}
          exits={room.exits}
        />
      ))}
    </div>
  );
};

export default Map;
