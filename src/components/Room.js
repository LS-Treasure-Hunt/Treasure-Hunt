import React from "react";
import { useStateValue } from "../hooks/useStateValue";

const Room = ({ roomId, coordinates, exits }) => {
  const [{ gameState }] = useStateValue();

  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - 50) * 30;
    let adjustedy = (y - 50) * 30;
    return [adjustedx, adjustedy];
  };

  const specialRooms = [1, 22, 55, 374, 461, 467, 486, 492, 495, 499];

  if (coordinates) {
    let coords = getCoords(coordinates);
    let visible = false;

    return (
      <div>
        <div
          className={`room ${specialRooms.includes(roomId) &&
            "special"} ${gameState.room_id === roomId && "currentRoom"}`}
          style={{ left: coords[0], bottom: coords[1] }}
        >
          {roomId}
        </div>
        <div className={`link ${exits.includes("e") && "e"}`}></div>
        <div className={`link ${exits.includes("n") && "n"}`}></div>
        <div className={`link  ${exits.includes("s") && "s"} `}></div>
        <div className={`link  ${exits.includes("w") && "w"} `}></div>
      </div>
    );
  } else {
    console.log(`${roomId} has no coordinates`);
    return null;
  }
};

export default Room;
