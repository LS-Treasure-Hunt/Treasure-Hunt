import React from "react";
import { take, playerStatus } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

export const RoomInfo = () => {
  const [{ gameState }, dispatch] = useStateValue();

  return (
    <div className="roomInfo">
      <h1>Room {gameState.room_id}</h1>
      <p>{gameState.coordinates}</p>
      <ul>
        Exits:{" "}
        {gameState.exits.map((coor, i) => (
          <li className="liDirection" key={i}>
            {coor}
          </li>
        ))}
      </ul>
      <p>
        Terrain:{" "}
        {gameState.terrain === "NORMAL"
          ? "Normal 🌿"
          : gameState.terrain === "MOUNTAIN"
          ? "Mountain ⛰️"
          : gameState.terrain === "TRAP"
          ? "Trap ⚡"
          : gameState.terrain === "DARKNESS"
          ? "Darkness 🌚"
          : gameState.terrain === "CAVE"
          ? "Cave 🔦"
          : "Unknown"}{" "}
      </p>
      <p>Description: {gameState.description}</p>
      <div>
        Other Players:{" "}
        <div className="otherPlayers">
          <ul>
            {gameState.players.length > 0
              ? gameState.players.map((val, i) => (
                  <li className="liPlayer" key={i}>
                    {val}
                  </li>
                ))
              : "None"}
          </ul>
        </div>
      </div>
      <div>
        Items:{" "}
        <ul>
          {gameState.items.length > 0
            ? gameState.items.map((val, i) => (
                <li
                  className="liTreasure"
                  key={i}
                  onClick={async () => {
                    await take(dispatch, val);
                    await playerStatus(dispatch);
                  }}
                >
                  {val}
                </li>
              ))
            : "None"}
        </ul>
      </div>
    </div>
  );
};

export default RoomInfo;
