import React from "react";
import { examine, buy, playerStatus } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

const ManualUniqueActions = () => {
  const [{ gameState, playerState }, dispatch] = useStateValue();
  return (
    <>
      {gameState.room_id === 15 && (
        <button
          className={`ability clickable special ${gameState.mode !== "manual" &&
            "nonManual"}`}
          onClick={async () => {
            if (
              playerState.abilities[0] === "pray" &&
              playerState.gold > 2000
            ) {
              await buy(dispatch);
              await playerStatus(dispatch);
            }
          }}
        >
          {playerState.abilities[0] !== "pray" && playerState.gold < 2000 && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
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
    </>
  );
};

export default ManualUniqueActions