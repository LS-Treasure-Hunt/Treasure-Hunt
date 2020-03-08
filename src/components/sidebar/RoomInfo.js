import React from "react";
import { take, playerStatus } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

export const RoomInfo = () => {
  const [{ gameState }, dispatch] = useStateValue();

  return (
    <div className="roomInfo">
      <h2>Room {gameState.room_id}</h2>
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
        <span className="roomDetails">
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
        </span>
      </p>
      <p>
        Description:{" "}
        <span className="roomDetails">{gameState.description}</span>
      </p>
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
              : <li>None
            </li>}
          </ul>
        </div>
      </div>
      <div>
        Items:{" "}
        <ul className="roomItems">
          {gameState.items.length > 0 ? (
            gameState.items.map((val, i) => (
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
          ) : (
            <span className="roomDetails">None</span>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RoomInfo;
