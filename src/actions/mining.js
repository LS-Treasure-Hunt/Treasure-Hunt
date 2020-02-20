// get last proof, mine (submits proof), get balance
import { axiosWithAuth } from "../util/axiosWIthAuth";
import { wait } from "./cooldown";
import { sha256 } from "js-sha256";

export const GETTING_LAST_PROOF = "GETTING_LAST_PROOF";
export const GET_LAST_PROOF_SUCCESS = "GET_LAST_PROOF_SUCCESS";
export const GET_LAST_PROOF_FAILURE = "GET_LAST_PROOF_FAILURE";

export const getLastProof = async dispatch => {
  dispatch({ type: GETTING_LAST_PROOF });
  try {
    const res = await axiosWithAuth().get("bc/last_proof/");
    // console.log(res.data);
    dispatch({ type: GET_LAST_PROOF_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred!: ", err.response);
    dispatch({ type: GET_LAST_PROOF_FAILURE, payload: err.response });
  }
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

export const mine = async (dispatch, newProof) => {
  dispatch({ type: MINING_START });
  try {
    const res = await axiosWithAuth().post("bc/mine/", { proof: newProof });
    // console.log(res.data);
    dispatch({ type: MINING_SUCCESS, payload: res.data });
    wait(res.data.cooldown);
    return res.data;
  } catch (err) {
    console.log("Error occurred!: ", err.response);
    dispatch({ type: MINING_FAILURE, payload: err.response });
  }
};
