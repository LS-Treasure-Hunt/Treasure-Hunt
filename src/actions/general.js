// examine, take, drop, sell
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_INIT = "START_INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_ERROR = "INIT_ERROR";

export const initGame = dispatch => {
  dispatch({ type: START_INIT });
  return axiosWithAuth()
    .get("adv/init")
    .then(res => {
      dispatch({ type: INIT_SUCCESS, payload: res.data });
      wait(res.data.cooldown);
      return res.data;
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({ type: INIT_ERROR, payload: err.response });
    });
};
