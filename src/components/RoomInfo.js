import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const RoomInfo = () => {
  const [{ gameState }] = useStateValue();

  return (
    <div className="roominfo">
      <h1>Room {gameState.room_id}</h1>
      <p>Coordinates: {gameState.coordinates}</p>
      <p>
        Exits: {gameState.exits}
      </p>
      <p>Terrain: {gameState.terrain}</p>
      <ul><div>Other Players:</div>{" "}
        {gameState.players.length > 0
          ? gameState.players.map((coor, i) => <li key={i}>{coor}</li>)
          : "None"}
      </ul>
    </div>
  );
};

export default RoomInfo;
