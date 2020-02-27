import React from "react";
import Room from "./Room";

import { useStateValue } from "../hooks/useStateValue";

const Map = ({ map }) => {
  let worldMap = Object.values(map);

  return (
    <div>
      {worldMap.map(room => (
        <Room roomId={room.room_id} coordinates={room.coordinates} />
      ))}
    </div>
  );
};

export default Map;
