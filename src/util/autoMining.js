// auto go to well, examine, decode, go to room, get last proof, find valid proof, submit proof
import {
  warp,
  recall,
  initGame,
  getLastProof,
  findProofOfWork,
  mine,
  getBalance,
  CLEAR_PATH,
  SET_ITEM_LOGS
} from "../actions";
import { traverse } from "./traverse";
import { map } from "../util/map";
import { decodedMessage } from "./cpu";

export const mineCoin = async dispatch => {
  console.log("getting last proof...");
  let lastProof = await getLastProof(dispatch);
  console.log("last proof: ", lastProof);
  let { proof, difficulty } = lastProof;
  console.log("finding proof of work...");
  let newProof = findProofOfWork(proof, difficulty);
  console.log("proof of work found!");
  return await mine(dispatch, newProof);
};

export const autoCoinMiner = async (dispatch, attempts, canDash, canFly) => {
  let count = 0;
  // First init to get starting room
  let init = await initGame(dispatch);

  // Check to see if you're in the light(regular) world, if not, warp
  if (map[init.room_id] === undefined) {
    let warpToLight = await warp(dispatch);
    init = warpToLight;
  }

  while (count < attempts) {
    // Go to well (room 55)
    if (init.room_id !== 55) {
      await recall(dispatch);
      await traverse(dispatch, 55, map, canDash, canFly);
      dispatch({ type: CLEAR_PATH });
    }
    // Examine (res.data.description === string to decode)
    let room_number = await decodedMessage(dispatch);
    // console.log("room number", room_number);
    let mine_message = `Go to room ${room_number} to mine a coin.`;
    setTimeout(
      () =>
        dispatch({
          type: SET_ITEM_LOGS,
          payload: { description: mine_message }
        }),
      500
    );
    // traverse to room
    await traverse(dispatch, room_number, map, canDash, canFly);
    // mine coin
    await mineCoin(dispatch);
    await getBalance(dispatch);
    dispatch({ type: CLEAR_PATH });
    init = { room_id: room_number };
    count++;
  }
};
