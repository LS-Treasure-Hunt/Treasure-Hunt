import React from "react";
import { useStateValue } from "../../hooks/useStateValue";

export const RoomInfo = () => {
  const [{ gameState }] = useStateValue();
  return (
    <div className="roomInfo">
      <h1>Room {gameState.room_id}</h1>
      <p>{gameState.coordinates}</p>
      <ul>Exits:{" "}{gameState.exits.map((coor, i) => (
          <li key={i}>{coor}</li>
        ))}
      </ul>
      <p>Terrain:{" "}
      {gameState.terrain === "NORMAL" ? "Normal 🌿" : gameState.terrain === "MOUNTAIN" ? "Mountain ⛰️" : gameState.terrain === "TRAP" ? "Trap ⚡" : gameState.terrain === "DARKNESS" ? "Darkness 🌚" : gameState.terrain === "CAVE" ? "Cave 🔦" : "Unknown"} </p>
      <p>Description: {gameState.description}</p>
      <div>
        Other Players:{" "}
        {gameState.players.length > 0
          ? gameState.players.map((coor, i) => <li key={i}>{coor}</li>)
          : "None"}
      </div>
    </div>
  );
};

export default RoomInfo;
