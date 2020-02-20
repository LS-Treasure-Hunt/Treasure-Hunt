// get last proof, mine (submits proof), get balance
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { sha256 } from "js-sha256";

export const GETTING_LAST_PROOF = "GETTING_LAST_PROOF";
export const GET_LAST_PROOF_SUCCESS = "GET_LAST_PROOF_SUCCESS";
export const GET_LAST_PROOF_FAILURE = "GET_LAST_PROOF_FAILURE";

export const getLastProof = dispatch => {
  dispatch({ type: GETTING_LAST_PROOF });
  axiosWithAuth()
    .get("bc/last_proof/")
    .then(res => {
      // console.log(res.data);
      // wait(res.data.cooldown);
      dispatch({ type: GET_LAST_PROOF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error occurred!: ", err.response);
      dispatch({ type: GET_LAST_PROOF_FAILURE, payload: err.response });
    });
};

export const FINDING_NEW_PROOF = "FINDING_NEW_PROOF";
export const NEW_PROOF_FOUND = "NEW_PROOF_FOUND";

export const findProofOfWork = (lastProof, difficulty) => {
  // dispatch({ type: FINDING_NEW_PROOF });

  let proof = 0;
  let leadingZeros = "0".repeat;

  while (sha256(`${lastProof}${proof}`).slice(0, difficulty) !== leadingZeros) {
    proof++;
  }

  // dispatch({ type: NEW_PROOF_FOUND, payload: proof });

  return proof;
};

export const MINING_START = "MINING_START";
export const MINING_SUCCESS = "MINING_SUCCESS";
export const MINING_FAILURE = "MINING_FAILURE";

export const mine = (dispatch, newProof) => {
  dispatch({ type: MINING_START });

  axiosWithAuth()
    .post("bc/mine/", { proof: newProof })
    .then(res => {
      // wait(res.data.cooldown);
      dispatch({ type: MINING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error occurred!: ", err.response);
      dispatch({ type: MINING_FAILURE, payload: err.response });
    });
};
