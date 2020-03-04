import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { warp } from "../../actions/movement";

export const Abilities = () => {
  const [{ playerState }] = useStateValue();
 const [abilities, setAbilities] = useState({
    "PRAY": "unavailable",
    "MINE": "available",
    "FLIGHT": "locked",
    "DASH": "locked",
    "CARRY": "locked",
    "RECALL": "locked",
    "WARP": "locked"
  });
/* 
  {Object.keys(abilities).map(k => (
    <li className={abilities[k]}>{k}</li>
  ))} */
/* 
  playerState.abilities.map((s) => {
    let match = s.toUpperCase()
    setAbilities({...abilities, match: "available"})
  }) */

  return (
    <div className="abilities">
      <ul>
      {Object.keys(abilities).map(k => (
    <li className={abilities[k]}>{k}</li>
      ))}
  
      </ul>
    </div>
  );
};

export default Abilities;
