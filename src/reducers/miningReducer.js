import {
  GETTING_LAST_PROOF,
  GET_LAST_PROOF_SUCCESS,
  GET_LAST_PROOF_FAILURE,
  FINDING_NEW_PROOF,
  NEW_PROOF_FOUND,
  MINING_START,
  MINING_SUCCESS,
  MINING_FAILURE
} from "../actions";

/*
  miningState: {
    index: 0,
    transactions: "",
    proof: 0,
    previous_hash: "",
    cooldown: 0,
    messages: [],
    errors: [],
    difficulty: 0,
    newProof: "",
    isLoading: false
  }
*/

export const miningReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_LAST_PROOF:
    case MINING_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_LAST_PROOF_SUCCESS:
    case MINING_SUCCESS:
      return {
        ...state,
        ...payload,
        isLoading: false
      };
    case GET_LAST_PROOF_FAILURE:
    case MINING_FAILURE:
      return {
        ...state,
        serverError: payload,
        isLoading: false
      };
    // case FINDING_NEW_PROOF:
    //   return {
    //     ...state
    //   };
    // case NEW_PROOF_FOUND:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
};
