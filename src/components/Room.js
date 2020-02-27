import React from "react";
import { useStateValue } from "../hooks/useStateValue";

const Room = ({ roomId, coordinates }) => {
  const [{ gameState }] = useStateValue();

  let roomWidth = 50;
  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - 50) * roomWidth;
    let adjustedy = (y - 50) * roomWidth;
    return [adjustedx, adjustedy];
  };

  const specialRooms = [1, 22, 55, 374, 461, 467, 486, 492, 495, 499];

  if (coordinates) {
    let coords = getCoords(coordinates);

    return (
      <div
        className={`room ${specialRooms.includes(roomId) &&
          "special"} ${gameState.room_id === roomId && "currentRoom"}`}
        style={{ left: coords[0], bottom: coords[1] }}
      >
        {roomId}
      </div>
    );
  } else {
    console.log(`${roomId} has no coordinates`);
    return null;
  }
};

export default Room;
