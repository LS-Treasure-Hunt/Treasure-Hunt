import React from "react";
import { move, SET_ITEM_LOGS } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";
import { map } from "../../util/map";
import { darkmap } from "../../util/darkMap";

const DirectionalPad = () => {
  const [{ gameState }, dispatch] = useStateValue();

  const moveBoosted = e => {
    const direction = e.target.value;

    let room =
      gameState.room_id > 499
        ? darkmap[gameState.room_id].neighbors[direction]
        : map[gameState.room_id].neighbors[direction];

    if (gameState.exits.includes(direction) && room !== undefined) {
      move(dispatch, direction, room);
    } else {
      dispatch({
        type: SET_ITEM_LOGS,
        payload: { description: "You can't move that direction" }
      });
    }
  };

  return (
    <div className="dpad">
      <button value="n" onClick={e => moveBoosted(e)} className="north locked">
        N
      </button>
      <button value="w" onClick={e => moveBoosted(e)} className="west locked">
        W
      </button>
      <button value="s" onClick={e => moveBoosted(e)} className="south locked">
        S
      </button>
      <button value="e" onClick={e => moveBoosted(e)} className="east locked">
        E
      </button>
    </div>
  );
};

export default DirectionalPad;
