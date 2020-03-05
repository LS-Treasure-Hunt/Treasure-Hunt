import React from "react";
import { move, examine, SET_ITEM_LOGS } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";
import { map } from "../../util/map";
import { darkmap } from "../../util/darkMap";

const DirectionalPad = () => {
  const [{ gameState, playerState }, dispatch] = useStateValue();

  const moveBoosted = e => {
    const direction = e.target.value;

    let room =
      gameState.room_id > 499
        ? darkmap[gameState.room_id].neighbors[direction]
        : map[gameState.room_id].neighbors[direction];

    if (gameState.exits.includes(direction) && room !== undefined) {
      move(dispatch, direction, room);
    }
  };

  return (
    <div className="dpad-container">
      <div className={`dpad ${gameState.mode !== "manual" && "nonManual"}`}>
        <button
          value="n"
          onClick={e => moveBoosted(e)}
          className="north locked"
        >
          N
        </button>
        <button value="w" onClick={e => moveBoosted(e)} className="west locked">
          W
        </button>
        <button
          value="s"
          onClick={e => moveBoosted(e)}
          className="south locked"
        >
          S
        </button>
        <button value="e" onClick={e => moveBoosted(e)} className="east locked">
          E
        </button>
      </div>
      {gameState.room_id === 15 && (
        <button
          className={`ability clickable special ${gameState.mode !== "manual" &&
            "nonManual"}`}
          onClick={() => {
            if (playerState.abilities[0] === "pray") {
              // buy(dispatch);
            }
          }}
        >
          Buy Donut
        </button>
      )}
      {gameState.room_id === 486 && (
        <button
          className={`ability clickable special ${gameState.mode !== "manual" &&
            "nonManual"}`}
          onClick={() => {
            if (playerState.abilities[0] === "pray") {
              examine(dispatch, "book");
            }
          }}
        >
          Examine Book
        </button>
      )}
    </div>
  );
};

export default DirectionalPad;
