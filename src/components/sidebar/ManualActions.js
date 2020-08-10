import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { warp, recall } from "../../actions/movement";
import { pray } from "../../actions/general";
import { mine } from "../../actions/mining";

export const ManualActions = () => {
  const [{ playerState, gameState }, dispatch] = useStateValue();

  const shrines = {
    22: "fly",
    374: "warp",
    461: "dash",
    492: "recall",
    499: "carry",
  };

  const abilityStatus = (ability) => {
    if (!playerState.abilities.includes(ability)) {
      return "locked";
    } else if (ability === "pray" && !shrines[gameState.room_id]) {
      return "unavailable";
    } else {
      return "clickable";
    }
  };

  return (
    <section className="abilities">
      <section className="abilityGroup">
        <div className="abilityHeading">One-Click Abilities</div>
        <button
          className={`ability pray ${abilityStatus("pray")}`}
          onClick={() => {
            console.log("praying");
            pray(dispatch);
          }}
          title="For use at shrines"
          disabled={abilityStatus("pray") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("pray") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Pray
        </button>
        <button
          className={`ability ${abilityStatus("mine")}`}
          onClick={() => {
            console.log("mining");
            mine(dispatch);
          }}
          title="Mine for coins"
          disabled={abilityStatus("mine") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("mine") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Mine
        </button>
        <button
          className={`ability ${abilityStatus("warp")}`}
          onClick={() => {
            console.log("warping");
            warp(dispatch);
          }}
          title="Warp between dimensions"
          disabled={abilityStatus("warp") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("warp") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Warp
        </button>
        <button
          className={`ability ${abilityStatus("recall")}`}
          onClick={() => {
            console.log("recalling");
            recall(dispatch);
          }}
          title="Recall back to room 0"
          disabled={abilityStatus("recall") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("recall") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Recall
        </button>
      </section>

      <section className="abilityGroup">
        <div className="abilityHeading">Other Abilities</div>
        <button
          className={`ability other ${
            playerState.abilities.includes("dash") ? "available" : "locked"
          }`}
          title="Dash in a straight line"
          disabled={abilityStatus("dash") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("dash") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Dash
        </button>
        <button
          className={`ability other ${
            playerState.abilities.includes("fly") ? "available" : "locked"
          }`}
          title="Fly over terrain (does not work in caves)"
          disabled={abilityStatus("fly") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("fly") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Fly
        </button>
        <button
          className={`ability other ${
            playerState.abilities.includes("carry") ? "available" : "locked"
          }`}
          title="Have Glasowyn carry an item"
          disabled={abilityStatus("carry") !== "clickable" ? true : false}
        >
          {!playerState.abilities.includes("carry") && (
            <span aria-label="emoji" role="img">
              🔒
            </span>
          )}
          Carry
        </button>
      </section>
    </section>
  );
};

export default ManualActions;
