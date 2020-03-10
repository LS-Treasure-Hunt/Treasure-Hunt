import {
  START_MOVE,
  MOVE_SUCCESS,
  MOVE_ERROR,
  START_FLY,
  FLY_SUCCESS,
  FLY_ERROR,
  START_INIT,
  INIT_SUCCESS,
  INIT_ERROR,
  START_TAKE,
  TAKE_SUCCESS,
  TAKE_ERROR,
  START_DROP,
  DROP_SUCCESS,
  DROP_ERROR,
  START_CARRY,
  CARRY_SUCCESS,
  CARRY_ERROR,
  START_RECEIVE,
  RECEIVE_SUCCESS,
  RECEIVE_ERROR,
  START_DASH,
  DASH_SUCCESS,
  DASH_ERROR,
  START_RECALL,
  RECALL_SUCCESS,
  RECALL_ERROR,
  START_WARP,
  WARP_SUCCESS,
  WARP_ERROR,
  START_GET_BALANCE,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_ERROR,
  SET_PATH,
  UPDATE_PATH,
  CLEAR_PATH,
  SET_MODE,
  SET_ITEM_LOGS,
  BUY_DONUT,
  BUY_SUCCESS,
  BUY_ERROR
} from "../actions";

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case START_INIT:
    case START_MOVE:
    case START_FLY:
    case START_TAKE:
    case START_DROP:
    case START_CARRY:
    case START_RECEIVE:
    case START_DASH:
    case START_RECALL:
    case START_WARP:
    case START_GET_BALANCE:
    case BUY_DONUT:
      return {
        ...state,
        isLoading: true
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case FLY_SUCCESS:
    case TAKE_SUCCESS:
    case DROP_SUCCESS:
    case CARRY_SUCCESS:
    case RECEIVE_SUCCESS:
    case DASH_SUCCESS:
    case RECALL_SUCCESS:
    case WARP_SUCCESS:
    case BUY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload,
        actionLog: [...state.actionLog, { messages: payload.messages }]
      };
    case GET_BALANCE_SUCCESS:
      return {
        ...state,
        coins: +payload.messages[0].split(" ")[5],
        isLoading: false,
        actionLog:
          state.actionLog.length > 1
            ? [...state.actionLog, { messages: payload.messages }]
            : []
      };
    case INIT_ERROR:
    case MOVE_ERROR:
    case FLY_ERROR:
    case TAKE_ERROR:
    case DROP_ERROR:
    case CARRY_ERROR:
    case RECEIVE_ERROR:
    case DASH_ERROR:
    case RECALL_ERROR:
    case WARP_ERROR:
    case GET_BALANCE_ERROR:
    case BUY_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    case SET_PATH:
      return {
        ...state,
        path: payload
      };
    case UPDATE_PATH:
      return {
        ...state,
        path: state.path.filter(room => !payload.includes(room))
      };
    case CLEAR_PATH:
      return {
        ...state,
        path: []
      };
    case SET_MODE:
      return {
        ...state,
        mode: payload
      };
    case SET_ITEM_LOGS:
      return {
        ...state,
        actionLog: [...state.actionLog, { messages: [payload.description] }]
      };
    default:
      return state;
  }
};
