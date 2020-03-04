import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { warp, recall } from "../../actions/movement";
import { pray } from "../../actions/general";

export const Abilities = () => {
  const [{ playerState }, dispatch] = useStateValue();
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

  return (
    <div className="abilities">
      <ul>
        <button
          key={"pray"}
          className={`ability ${playerState.abilities.includes("pray") &&
            "available"}`}
          onClick={() => {
            console.log("praying");
            pray(dispatch);
          }}
        >
          PRAY
        </button>
        <button
          key={"warp"}
          className={`ability ${playerState.abilities.includes("warp") &&
            "available"}`}
          onClick={() => {
            console.log("warping");
            warp(dispatch);
          }}
        >
          WARP
        </button>
        <button
          key={"recall"}
          className={`ability ${playerState.abilities.includes("recall") &&
            "available"}`}
          onClick={() => {
            console.log("recalling");
            recall(dispatch);
          }}
        >
          RECALL
        </button>
        {playerState.abilities.map(s => {
          return (
            <li key={s} className="available">
              {s.toUpperCase()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Abilities;
