import {
  START_MOVE,
  MOVE_SUCCESS,
  MOVE_ERROR,
  START_FLY,
  FLY_SUCCESS,
  FLY_ERROR,
  START_INIT,
  INIT_SUCCESS,
  INIT_ERROR
} from "../actions";

export const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case START_INIT:
    case START_MOVE:
    case START_FLY:
      return {
        ...state,
        isLoading: true
      };
    case INIT_SUCCESS:
    case MOVE_SUCCESS:
    case FLY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case INIT_ERROR:
    case MOVE_ERROR:
    case FLY_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
