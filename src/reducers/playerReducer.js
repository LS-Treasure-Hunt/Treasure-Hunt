import {
  START_STATUS,
  STATUS_SUCCESS,
  STATUS_ERROR,
  START_PRAY,
  PRAY_SUCCESS,
  PRAY_ERROR,
  START_WEAR,
  START_UNDRESS,
  WEAR_SUCCESS,
  UNDRESS_SUCCESS,
  WEAR_ERROR,
  UNDRESS_ERROR
} from "../actions";

export const playerReducer = (state, { type, payload }) => {
  // status endpoint
  switch (type) {
    case START_STATUS:
    case START_PRAY:
    case START_WEAR:
    case START_UNDRESS:
      return {
        ...state,
        isLoading: true
      };
    case STATUS_SUCCESS:
    case PRAY_SUCCESS:
    case WEAR_SUCCESS:
    case UNDRESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case STATUS_ERROR:
    case PRAY_ERROR:
    case WEAR_ERROR:
    case UNDRESS_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
