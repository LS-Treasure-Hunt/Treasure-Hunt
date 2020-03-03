import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { warp } from "../../actions/movement";

export const Abilities = () => {
<<<<<<< HEAD
  const [{ playerState }, dispatch] = useStateValue();
  const [abilities, setAbilities] = useState({
    PRAY: "unavailable",
    MINE: "available",
    FLIGHT: "locked",
    DASH: "locked",
    CARRY: "locked",
    RECALL: "locked",
    WARP: "locked"
=======
  const [{ playerState }] = useStateValue();
/*   const [abilities, setAbilities] = useState({
    "PRAY": "unavailable",
    "MINE": "available",
    "FLIGHT": "locked",
    "DASH": "locked",
    "CARRY": "locked",
    "RECALL": "locked",
    "WARP": "locked"
>>>>>>> d4925abd2cd077383138c6956d5d5c64830318a9
  });

  {Object.keys(abilities).map(k => (
    <li className={abilities[k]}>{k}</li>
  ))}

  playerState.abilities.map((s) => {
    let match = s.toUpperCase()
    setAbilities({...abilities, match: "available"})
  }) */

  return (
    <div className="abilities">
      <ul>
<<<<<<< HEAD
        {Object.keys(abilities).map((k, i) => (
          <li className={abilities[k]} key={i} onClick={() => warp(dispatch)}>
            {k}
          </li>
        ))}
=======
      {playerState.abilities.map((s) => {
        return (<li key={s} className="available">{s.toUpperCase()}</li>)
  })}
>>>>>>> d4925abd2cd077383138c6956d5d5c64830318a9
      </ul>
    </div>
  );
};

export default Abilities;
