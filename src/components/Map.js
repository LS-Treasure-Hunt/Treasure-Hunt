import React from "react";
import { useStateValue } from "../hooks/useStateValue";
import Room from "./Room";

const Map = ({ map }) => {
  const [{ gameState }] = useStateValue();
  let worldMap = Object.values(map);

  return (
    <div className="mapContainer">
      <div className={`map ${gameState.room_id > 499 && "darkWorld"}`}>
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
