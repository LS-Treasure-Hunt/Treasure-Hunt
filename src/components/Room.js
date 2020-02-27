import React from "react";

const Room = ({ roomId, coordinates }) => {
  let roomWidth = 50;
  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    let adjustedx = (x - 50) * roomWidth;
    let adjustedy = (y - 50) * roomWidth;
    return [adjustedx, adjustedy];
  };

  if (coordinates) {
    let coords = getCoords(coordinates);

    return (
      <div className="room" style={{ left: coords[0], bottom: coords[1] }}>
        {roomId}
      </div>
    );
  } else {
    console.log(`${roomId} has no coordinates`);
    return null;
  }
};

export default Room;
