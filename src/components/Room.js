import React from "react";

const Room = ({ roomId, coordinates }) => {
  const getCoords = coords => {
    let split = coords.split(",");
    let x = parseInt(split[0].slice(1), 10);
    let y = parseInt(split[1].slice(0, -1), 10);
    return [x, y];
  };

  if (coordinates) {
    let coords = getCoords(coordinates);
    console.log(coords);
    return (
      <div
        style={{
          border: "1px solid black",
          width: "30px",
          height: "30px"
        }}
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
