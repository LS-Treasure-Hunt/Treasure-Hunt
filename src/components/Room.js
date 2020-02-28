import React from "react";
import { useStateValue } from "../hooks/useStateValue";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Room = ({ roomId, coordinates, exits }) => {
  const [{ gameState }] = useStateValue();
  const { height, width } = useWindowDimensions();
  // console.log(height, width);
  let roomSize;
  let xOffset;
  let yOffset;
  let nLefteBottom;
  let eLeftnBottom;
  let sLeftwBottom;
  let wLeftsBottom;

  if (width > 1000) {
    roomSize = 35;
    xOffset = 47;
    yOffset = 35;
    nLefteBottom = 5;
    eLeftnBottom = 25;
    sLeftwBottom = 5;
    wLeftsBottom = 10;
  } else if (width > 700) {
    roomSize = 18;
    xOffset = 50;
    yOffset = 5;
    nLefteBottom = 3;
    eLeftnBottom = 9;
    sLeftwBottom = 3;
    wLeftsBottom = 9;
  } else {
    roomSize = 10;
  }

  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - xOffset) * roomSize;
    let adjustedy = (y - yOffset) * roomSize;
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
          {width > 1000 && roomId}
        </div>
        <div
          className={`link ${exits.includes("e") && "e"}`}
          style={{
            left: coords[0] + eLeftnBottom,
            bottom: coords[1] + nLefteBottom
          }}
        ></div>
        <div
          className={`link ${exits.includes("n") && "n"}`}
          style={{
            left: coords[0] + nLefteBottom,
            bottom: coords[1] + eLeftnBottom
          }}
        ></div>
        <div
          className={`link  ${exits.includes("s") && "s"} `}
          style={{
            left: coords[0] + sLeftwBottom,
            bottom: coords[1] - wLeftsBottom
          }}
        ></div>
        <div
          className={`link  ${exits.includes("w") && "w"} `}
          style={{
            left: coords[0] - wLeftsBottom,
            bottom: coords[1] + sLeftwBottom
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
