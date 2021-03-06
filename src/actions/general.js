// examine, take, drop, sell, status, carry, receive, pray, name change, transmog
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";

export const START_INIT = "START_INIT";
export const INIT_SUCCESS = "INIT_SUCCESS";
export const INIT_ERROR = "INIT_ERROR";

export const initGame = async (dispatch) => {
  dispatch({ type: START_INIT });
  try {
    const res = await axiosWithAuth().get("adv/init/");
    dispatch({ type: INIT_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: INIT_ERROR, payload: err.response });
  }
};

export const START_EXAMINE = "START_EXAMINE";
export const EXAMINE_SUCCESS = "EXAMINE_SUCCESS";
export const EXAMINE_ERROR = "EXAMINE_ERROR";

export const examine = async (dispatch, target) => {
  dispatch({ type: START_EXAMINE });
  try {
    const res = await axiosWithAuth().post("adv/examine/", { name: target });
    // console.log("res.data ", res.data);
    dispatch({ type: EXAMINE_SUCCESS, payload: res.data });
    dispatch({ type: SET_ITEM_LOGS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: EXAMINE_ERROR, payload: err.response });
  }
};

export const START_TAKE = "START_TAKE";
export const TAKE_SUCCESS = "TAKE_SUCCESS";
export const TAKE_ERROR = "TAKE_ERROR";

export const take = async (dispatch, item) => {
  dispatch({ type: START_TAKE });
  try {
    const res = await axiosWithAuth().post("adv/take/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: TAKE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: TAKE_ERROR, payload: err.response });
  }
};

export const START_SELL = "START_SELL";
export const SELL_SUCCESS = "SELL_SUCCESS";
export const SELL_ERROR = "SELL_ERROR";

export const sell = async (dispatch, item) => {
  dispatch({ type: START_SELL });
  try {
    const res = await axiosWithAuth().post("adv/sell/", {
      name: item,
      confirm: "yes",
    });
    dispatch({ type: SELL_SUCCESS, payload: res.data });
    dispatch({
      type: SET_ITEM_LOGS,
      payload: { description: `Sold ${item}` },
    });

    console.log(`Sold ${item}`);
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: SELL_ERROR, payload: err.response });
  }
};

export const START_DROP = "START_DROP";
export const DROP_SUCCESS = "DROP_SUCCESS";
export const DROP_ERROR = "DROP_ERROR";

export const drop = async (dispatch, item) => {
  dispatch({ type: START_DROP });
  try {
    const res = await axiosWithAuth().post("adv/drop/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: DROP_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: DROP_ERROR, payload: err.response });
  }
};

export const START_CARRY = "START_CARRY";
export const CARRY_SUCCESS = "CARRY_SUCCESS";
export const CARRY_ERROR = "CARRY_ERROR";

export const carry = async (dispatch, item) => {
  dispatch({ type: START_CARRY });
  try {
    const res = await axiosWithAuth().post("adv/carry/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: CARRY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: CARRY_ERROR, payload: err.response });
  }
};

export const START_RECEIVE = "START_RECEIVE";
export const RECEIVE_SUCCESS = "RECEIVE_SUCCESS";
export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receive = async (dispatch) => {
  dispatch({ type: START_RECEIVE });
  try {
    const res = await axiosWithAuth().post("adv/receive/");
    // console.log("res.data ", res.data);
    dispatch({ type: RECEIVE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: RECEIVE_ERROR, payload: err.response });
  }
};

export const START_STATUS = "START_STATUS";
export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_ERROR = "STATUS_ERROR";

export const playerStatus = async (dispatch) => {
  dispatch({ type: START_STATUS });
  try {
    const res = await axiosWithAuth().post("adv/status/");
    dispatch({ type: STATUS_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: STATUS_ERROR, payload: err.response });
  }
};

export const START_TRANSMOG = "START_TRANSMOG";
export const TRANSMOG_SUCCESS = "TRANSMOG_SUCCESS";
export const TRANSMOG_ERROR = "TRANSMOG_ERROR";

export const transmogrify = async (dispatch, item) => {
  dispatch({ type: START_TRANSMOG });
  try {
    const res = await axiosWithAuth().post("adv/transmogrify/", { name: item });
    dispatch({ type: TRANSMOG_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: TRANSMOG_ERROR, payload: err.response });
  }
};

export const START_GET_BALANCE = "START_GET_BALANCE";
export const GET_BALANCE_SUCCESS = "GET_BALANCE_SUCCESS";
export const GET_BALANCE_ERROR = "GET_BALANCE_ERROR";

export const getBalance = async (dispatch) => {
  dispatch({ type: START_GET_BALANCE });
  try {
    const res = await axiosWithAuth().get("bc/get_balance/");
    dispatch({ type: GET_BALANCE_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: GET_BALANCE_ERROR, payload: err.response });
  }
};

export const SET_PATH = "SET_PATH";
export const UPDATE_PATH = "UPDATE_PATH";
export const CLEAR_PATH = "CLEAR_PATH";

export const START_PRAY = "START_PRAY";
export const PRAY_SUCCESS = "PRAY_SUCCESS";
export const PRAY_ERROR = "PRAY_ERROR";

export const pray = async (dispatch) => {
  dispatch({ type: START_PRAY });
  try {
    const res = await axiosWithAuth().post("adv/pray/");
    dispatch({ type: PRAY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: PRAY_ERROR, payload: err.response });
  }
};

export const SET_MODE = "SET_MODE";
export const SET_ITEM_LOGS = "SET_ITEM_LOGS";

export const BUY_DONUT = "BUY_DONUT";
export const BUY_SUCCESS = "BUY_SUCCESS";
export const BUY_ERROR = "BUY_ERROR";

export const buy = async (dispatch) => {
  dispatch({ type: BUY_DONUT });
  try {
    const res = await axiosWithAuth().post("adv/buy/", {
      name: "donut",
      confirm: "yes",
    });
    dispatch({ type: BUY_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("error", err.response);
    dispatch({ type: BUY_ERROR, payload: err.response });
  }
};

export const START_WEAR = "START_WEAR";
export const WEAR_SUCCESS = "WEAR_SUCCESS";
export const WEAR_ERROR = "WEAR_ERROR";

export const wear = async (dispatch, item) => {
  dispatch({ type: START_WEAR });
  try {
    const res = await axiosWithAuth().post("adv/wear/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: WEAR_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: WEAR_ERROR, payload: err.response });
  }
};

export const START_UNDRESS = "START_UNDRESS";
export const UNDRESS_SUCCESS = "UNDRESS_SUCCESS";
export const UNDRESS_ERROR = "UNDRESS_ERROR";

export const undress = async (dispatch, item) => {
  dispatch({ type: START_UNDRESS });
  try {
    const res = await axiosWithAuth().post("adv/undress/", { name: item });
    // console.log("res.data ", res.data);
    dispatch({ type: UNDRESS_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred! ", err.response);
    dispatch({ type: UNDRESS_ERROR, payload: err.response });
  }
};
