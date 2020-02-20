// examine, take, drop, sell, carry, receive
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_INIT = "START_INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_ERROR = "INIT_ERROR";

export const initGame = async dispatch => {
  dispatch({ type: START_INIT });
  try {
    const res = await axiosWithAuth().get("adv/init");
    dispatch({ type: INIT_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: INIT_ERROR, payload: err.response });
  }
};

export const EXAMINE_START = "EXAMINE_START";
export const EXAMINE_SUCCESS = "EXAMINE_SUCCESS";
export const EXAMINE_FAILURE = "EXAMINE_FAILURE";

export const examine = async (dispatch, target) => {
  dispatch({ type: EXAMINE_START });
  try {
    const res = await axiosWithAuth().post("adv/examine/", { name: target });
    // console.log("res.data ", res.data);
    dispatch({ type: EXAMINE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: EXAMINE_FAILURE, payload: err.response });
  }
};

export const TAKE_START = "TAKE_START";
export const TAKE_SUCCESS = "TAKE_SUCCESS";
export const TAKE_FAILURE = "TAKE_FAILURE";

export const take = async (dispatch, item) => {
  dispatch({ type: TAKE_START });
  try {
    const res = await axiosWithAuth().post("adv/take/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: TAKE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: TAKE_FAILURE, payload: err.response });
  }
};

export const DROP_START = "DROP_START";
export const DROP_SUCCESS = "DROP_SUCCESS";
export const DROP_FAILURE = "DROP_FAILURE";

export const drop = async (dispatch, item) => {
  dispatch({ type: DROP_START });
  try {
    const res = await axiosWithAuth().post("adv/drop/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: DROP_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: DROP_FAILURE, payload: err.response });
  }
};

export const CARRY_START = "CARRY_START";
export const CARRY_SUCCESS = "CARRY_SUCCESS";
export const CARRY_FAILURE = "CARRY_FAILURE";

export const carry = async (dispatch, item) => {
  dispatch({ type: CARRY_START });
  try {
    const res = await axiosWithAuth().post("adv/carry/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: CARRY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: CARRY_FAILURE, payload: err.response });
  }
};

export const RECEIVE_START = "RECEIVE_START";
export const RECEIVE_SUCCESS = "RECEIVE_SUCCESS";
export const RECEIVE_FAILURE = "RECEIVE_FAILURE";

export const receive = async (dispatch, item) => {
  dispatch({ type: RECEIVE_START });
  try {
    const res = await axiosWithAuth().post("adv/receive/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: RECEIVE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: RECEIVE_FAILURE, payload: err.response });
  }
};
