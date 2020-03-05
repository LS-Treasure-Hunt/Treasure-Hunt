import {
  START_STATUS,
  STATUS_SUCCESS,
  STATUS_ERROR,
  START_PRAY,
  PRAY_SUCCESS,
  PRAY_ERROR
} from "../actions";

export const playerReducer = (state, { type, payload }) => {
  // status endpoint
  switch (type) {
    case START_STATUS:
    case START_PRAY:
      return {
        ...state,
        isLoading: true
      };
    case STATUS_SUCCESS:
    case PRAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case STATUS_ERROR:
    case PRAY_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
