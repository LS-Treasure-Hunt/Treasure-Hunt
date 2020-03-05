import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { traverse } from "../util/traverse";
import { map } from "../util/map";
import { darkmap } from "../util/darkMap";
import { CLEAR_PATH } from "../actions";

const Room = ({ roomId, coordinates, exits, room }) => {
  const [{ gameState }, dispatch] = useStateValue();
  // const { height, width } = useWindowDimensions();
  const { width } = useWindowDimensions();
  const [isHovering, setIsHovering] = useState(false);
  const [targetRoom, setTargetRoom] = useState(false);

  const handleHovering = () => {
    setIsHovering(!isHovering);
  };

  const goToRoom = async () => {
    setTargetRoom(true);
    await traverse(dispatch, roomId, map);
    setTargetRoom(false);
    dispatch({ type: CLEAR_PATH });
  };

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
  }

  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - xOffset) * roomSize;
    let adjustedy = (y - yOffset) * roomSize;
    return [adjustedx, adjustedy];
  };

  const specialRooms = {
    1: "special",
    15: "special",
    22: "special",
    55: "special",
    374: "special",
    461: "special",
    467: "special",
    486: "special",
    492: "special",
    495: "special",
    499: "special",
    555: "special"
  };

  if (coordinates) {
    let coords = getCoords(coordinates);

    return (
      <>
        <div
          className={`room ${specialRooms[roomId]} ${gameState.room_id ===
            roomId && "currentRoom"} ${targetRoom &&
            "targetRoom"} ${gameState.path.includes(room) && "path"}`}
          style={{ left: coords[0], bottom: coords[1] }}
          onClick={e => {
            console.log(`Clicked ${roomId}`);
            goToRoom();
          }}
          onMouseOver={handleHovering}
          onMouseOut={handleHovering}
        >
          {width > 1000 && roomId}
        </div>

        {isHovering && gameState.room_id > 499 && (
          <div
            className="hoverRoom"
            style={{ left: coords[0], bottom: coords[1] - 40 }}
          >
            {darkmap[roomId].title}
          </div>
        )}
        {isHovering && gameState.room_id < 500 && (
          <div
            className="hoverRoom"
            style={{ left: coords[0], bottom: coords[1] - 40 }}
          >
            {map[roomId].title}
          </div>
        )}
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
