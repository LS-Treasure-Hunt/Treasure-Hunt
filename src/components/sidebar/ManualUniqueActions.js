import React from "react";
import { examine, buy, playerStatus, SET_ITEM_LOGS } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";
import { decodedMessage } from "../../util/cpu";

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
      {(gameState.room_id === 55 || gameState.room_id === 555) && (
        <button
          className={`ability clickable special ${gameState.mode !== "manual" &&
            "nonManual"}`}
          onClick={async () => {
            if (playerState.abilities[0] === "pray") {
              let room_number = await decodedMessage(dispatch);
              let snitch_message = `Go to room ${room_number} to find the snitch.`;
              let mine_message = `Go to room ${room_number} to mine a coin.`;
              setTimeout(
                () =>
                  dispatch({
                    type: SET_ITEM_LOGS,
                    payload:
                      room_number < 500
                        ? { description: mine_message }
                        : { description: snitch_message }
                  }),
                2000
              );
            }
          }}
        >
          Examine Well
        </button>
      )}
    </>
  );
};

export default ManualUniqueActions;
