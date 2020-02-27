import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";

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
  })
  
  playerState.abilities.map((s) => {
    return s.toUpperCase() 
  })
  return (
    <div className="abilities">
  
  <div>Abilities</div>
      <ul>
        {Object.keys(abilities).map((k)=>
        <li className={abilities[k]}>{k}</li>)}
      </ul>
    </div>
  );
};

export default Abilities;
