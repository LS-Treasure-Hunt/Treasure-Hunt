import { START_TRANSMOG, TRANSMOG_SUCCESS, TRANSMOG_ERROR, START_EXAMINE,
  EXAMINE_SUCCESS,
  EXAMINE_ERROR,
   } from "../actions";

export const itemReducer = (state, { type, payload }) => {
  switch (type) {
    case START_EXAMINE:
    case START_TRANSMOG:
      return {
        ...state,
        isLoading: true
      };

    case EXAMINE_SUCCESS:
    case TRANSMOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...payload
      };
    case EXAMINE_ERROR:
    case TRANSMOG_ERROR:
      return {
        ...state,
        isLoading: false,
        serverError: payload
      };
    default:
      return state;
  }
};
