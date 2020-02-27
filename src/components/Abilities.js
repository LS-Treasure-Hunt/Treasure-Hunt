import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Abilities = () => {
  const [{ playerState }] = useStateValue();
  const [abilities, setAbilities] = useState({
    PRAY: "unavailable",
    MINE: "available",
    FLIGHT: "locked",
    DASH: "locked",
    CARRY: "locked",
    RECALL: "locked",
    WARP: "locked"
  });

  // Add this in a use
  /* playerState.abilities.map((s) => {
    let match = s.toUpperCase()
    setAbilities({...abilities, match: "available"})
  }) */

  return (
    <div className="abilities">
      <h1>Abilities</h1>
      <ul>
        {Object.keys(abilities).map(k => (
          <li className={abilities[k]}>{k}</li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;
