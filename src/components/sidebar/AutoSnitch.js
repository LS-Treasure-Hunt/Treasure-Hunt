import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { autoSnitchMiner } from "../../util/autoSnitching";

const AutoSnitch = () => {
  const [{ gameState, playerState }, dispatch] = useStateValue();
  const [attempts, setAttempts] = useState(0);

  const updateAttempts = e => {
    setAttempts(+e.target.value);
  };

  return (
    <div
      className={`modeBox autoSnitch ${gameState.mode !== "autoSnitch" &&
        "hidden"}`}
    >
      <div className="modeDescription">
        AutoSnitch automatically moves player to traverse the map and collect
        Golden Snitches.
        <div className="modeReq">
          <span className="reqLabel">Abilities Required:</span> Dash, Fly,
          Recall, Warp
        </div>
        <div className="modeReq">
          <span className="reqLabel">Other Requirements:</span> Bodywear,
          Footwear
        </div>
      </div>
      {playerState.abilities.includes("dash") &&
      playerState.abilities.includes("fly") &&
      playerState.abilities.includes("recall") &&
      playerState.abilities.includes("warp") &&
      playerState.bodywear !== null &&
      playerState.footwear !== null ? (
        <div className="autoLimit">
          Enter desired number of snitching attempts:
          <div className="autoInput">
            <input type="number" placeholder="#" onChange={updateAttempts} />
            <button
              className="autoAction"
              onClick={() => {
                autoSnitchMiner(dispatch, attempts);
                console.log("autoSnitch");
              }}
            >
              Collect Snitches
            </button>
          </div>
        </div>
      ) : (
        <div className="unqualified">
          Player does not have all required abilities, bodywear, or footwear.
        </div>
      )}
    </div>
  );
};

export default AutoSnitch;
