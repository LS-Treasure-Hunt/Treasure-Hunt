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
  START_DASH,
  DASH_SUCCESS,
  DASH_ERROR,
  START_RECALL,
  RECALL_SUCCESS,
  RECALL_ERROR,
  START_WARP,
  WARP_SUCCESS,
  WARP_ERROR
} from "../actions";

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case START_INIT:
    case START_MOVE:
    case START_FLY:
    case START_DASH:
    case START_RECALL:
    case START_WARP:
      return {
        ...state,
        isLoading: true
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case FLY_SUCCESS:
    case DASH_SUCCESS:
    case RECALL_SUCCESS:
    case WARP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case INIT_ERROR:
    case MOVE_ERROR:
    case FLY_ERROR:
    case DASH_ERROR:
    case RECALL_ERROR:
    case WARP_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
