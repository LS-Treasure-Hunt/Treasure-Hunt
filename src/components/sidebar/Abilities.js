import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { warp, recall } from "../../actions/movement";
import { pray } from "../../actions/general";
import { mine } from "../../actions/mining";

export const Abilities = () => {
  const [{ playerState, gameState }, dispatch] = useStateValue();
  /*   const [abilities, setAbilities] = useState({
    "PRAY": "unavailable",
    "MINE": "available",
    "FLIGHT": "locked",
    "DASH": "locked",
    "CARRY": "locked",
    "RECALL": "locked",
    "WARP": "locked"
  });

  {Object.keys(abilities).map(k => (
    <li className={abilities[k]}>{k}</li>
  ))}

  playerState.abilities.map((s) => {
    let match = s.toUpperCase()
    setAbilities({...abilities, match: "available"})
  }) */

  const allAbilities = [
    "pray",
    "mine",
    "warp",
    "recall",
    "fly",
    "dash",
    "carry"
  ];

  const shrines = [22, 374, 461, 486, 492, 499];

  const abilityStatus = ability => {
    if (!playerState.abilities.includes(ability)) {
      return "locked";
    } else if (ability === "pray" && !shrines.includes(gameState.room_id)) {
      return "unavailable";
    } else {
      return "clickable";
    }
  };

  return (
    <section
      className={`abilities ${gameState.mode !== "manual" && "nonManual"}`}
    >
      <section className="abilityGroup">
        <div className="abilityHeading">One-Click Abilities</div>
        <button
          className={`ability pray ${abilityStatus("pray")}`}
          onClick={() => {
            console.log("praying");
            pray(dispatch);
          }}
          title="For use at shrines"
        >
          {!playerState.abilities.includes("pray") && (
            <span aria-label="emoji">🔒</span>
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
        >
          {!playerState.abilities.includes("mine") && (
            <span aria-label="emoji">🔒</span>
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
        >
          {!playerState.abilities.includes("warp") && (
            <span aria-label="emoji">🔒</span>
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
        >
          {!playerState.abilities.includes("recall") && (
            <span aria-label="emoji">🔒</span>
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
        >
          {!playerState.abilities.includes("dash") && (
            <span aria-label="emoji">🔒</span>
          )}
          Dash
        </button>
        <button
          className={`ability other ${
            playerState.abilities.includes("fly") ? "available" : "locked"
          }`}
          title="Fly over terrain (does not work in caves)"
        >
          {!playerState.abilities.includes("fly") && (
            <span aria-label="emoji">🔒</span>
          )}
          Fly
        </button>
        <button
          className={`ability other ${
            playerState.abilities.includes("carry") ? "available" : "locked"
          }`}
          title="Have Glasowyn carry an item"
        >
          {!playerState.abilities.includes("carry") && (
            <span aria-label="emoji">🔒</span>
          )}
          Carry
        </button>
      </section>
    </section>
  );
};

export default Abilities;
