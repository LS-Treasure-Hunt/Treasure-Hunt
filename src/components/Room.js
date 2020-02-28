import React from "react";
import { useStateValue } from "../hooks/useStateValue";

const Room = ({ roomId, coordinates, exits }) => {
  const [{ gameState }] = useStateValue();
  let roomSize = 35;

  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - 40) * roomSize;
    let adjustedy = (y - 40) * roomSize;
    return [adjustedx, adjustedy];
  };

  const specialRooms = [1, 22, 55, 374, 461, 467, 486, 492, 495, 499];

  if (coordinates) {
    let coords = getCoords(coordinates);

    return (
      <>
        <div
          className={`room ${specialRooms.includes(roomId) &&
            "special"} ${gameState.room_id === roomId && "currentRoom"}`}
          style={{ left: coords[0], bottom: coords[1] }}
        >
          {roomId}
        </div>
        <div
          className={`link ${exits.includes("e") && "e"}`}
          style={{
            left: coords[0] + 25,
            bottom: coords[1] + 5
          }}
        ></div>
        <div
          className={`link ${exits.includes("n") && "n"}`}
          style={{
            left: coords[0] + 5,
            bottom: coords[1] + 25
          }}
        ></div>
        <div
          className={`link  ${exits.includes("s") && "s"} `}
          style={{
            left: coords[0] + 5,
            bottom: coords[1] - 10
          }}
        ></div>
        <div
          className={`link  ${exits.includes("w") && "w"} `}
          style={{
            left: coords[0] - 10,
            bottom: coords[1] + 5
          }}
        ></div>
      </>
    );
  } else {
    console.log(`${roomId} has no coordinates`);
    return null;
  }
};

export default Room;
