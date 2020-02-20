// dash, fly, warp, recall, move
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_MOVE = "START_MOVE";
export const MOVE_SUCCESS = "MOVE_SUCCESS";
export const MOVE_ERROR = "MOVE_ERROR";

export const move = (dispatch, dir, nextRoom = null) => {
  let command =
    nextRoom !== null
      ? { direction: dir, next_room_id: `${nextRoom}` }
      : { direction: dir };
  dispatch({ type: START_MOVE });
  return axiosWithAuth()
    .post("adv/move/", command)
    .then(res => {
      // console.log(res.data);
      dispatch({ type: MOVE_SUCCESS, payload: res.data });
      wait(res.data.cooldown);
      return res.data;
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({ type: MOVE_ERROR, payload: err.response });
    });
};

export const START_FLY = "START_FLY";
export const FLY_SUCCESS = "FLY_SUCCESS";
export const FLY_ERROR = "FLY_ERROR";

export const fly = (dispatch, dir, nextRoom) => {
  let direction = { direction: dir, next_room_id: nextRoom };
  return axiosWithAuth()
    .post("adv/fly/", direction)
    .then(res => {
      wait(res.data.cooldown);
      return res.data;
    })
    .catch(err => console.log("error", err.response));
};
