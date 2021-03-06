// be in darkworld, go to well, examine, decode, go to room, grab snitch
import {
  warp,
  recall,
  take,
  initGame,
  playerStatus,
  CLEAR_PATH
} from "../actions";
import { traverse } from "./traverse";
import { darkmap } from "../util/darkMap";
import { decodedMessage } from "./cpu";

export const autoSnitchMiner = async (dispatch, attempts, canDash, canFly) => {
  let count = 0;
  // First init to get starting room
  let init = await initGame(dispatch);

  // Check to see if you're in the dark world, if not, warp
  if (darkmap[init.room_id] === undefined) {
    let warpToDark = await warp(dispatch);
    init = warpToDark;
  }

  while (count < attempts) {
    // Go to well (room 555)
    if (init.room_id !== 555) {
      await recall(dispatch);
      await warp(dispatch);
      await traverse(dispatch, 555, darkmap, canDash, canFly);
      dispatch({ type: CLEAR_PATH });
    }
    // Examine (res.data.description === string to decode)
    let room_number = await decodedMessage(dispatch);
    console.log("room number", room_number);
    // traverse to room
    await traverse(dispatch, room_number, darkmap, canDash, canFly);
    // pick up snitch
    let snitch = await take(dispatch, "golden snitch");
    if (
      snitch.messages.length > 0 &&
      snitch.messages[0] ===
        "A great warmth floods your body as your hand closes around the snitch before it vanishes."
    ) {
      console.log("SUCCESS!");
    } else {
      console.log("Just missed it...");
    }
    await playerStatus(dispatch);
    dispatch({ type: CLEAR_PATH });
    init = { room_id: room_number };
    count++;
  }
};
