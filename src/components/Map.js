import React from "react";
import Room from "./Room";

const Map = ({ map }) => {
  let worldMap = Object.values(map);

  return (
    <div className="map">
      {worldMap.map((room, i) => (
        <Room
          roomId={room.room_id}
          coordinates={room.coordinates}
          exits={room.exits}
          key={i}
        />
      ))}
    </div>
  );
};

export default Map;
