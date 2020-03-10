import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { autoCoinMiner } from "../../util/autoMining";

const AutoMine = () => {
  const [{ gameState, playerState }, dispatch] = useStateValue();
  const [attempts, setAttempts] = useState(0);

  const updateAttempts = e => {
    setAttempts(+e.target.value);
  };

  return (
    <div
      className={`modeBox autoMine ${gameState.mode !== "autoMine" &&
        "hidden"}`}
    >
      <div className="modeDescription">
        Automine automatically moves the player to traverse the map and mine
        coins.
        <div className="modeReq">
          <span className="reqLabel">Abilities Required:</span> Dash, Fly, Mine,
          Recall
        </div>
      </div>
      {playerState.abilities.includes("dash") &&
      playerState.abilities.includes("fly") &&
      playerState.abilities.includes("recall") &&
      playerState.abilities.includes("mine") ? (
        <div className="autoLimit">
          Enter desired number of mining attempts:
          <div className="autoInput">
            <input type="number" placeholder="#" onChange={updateAttempts} />
            <button
              className="autoAction"
              onClick={() => {
                autoCoinMiner(
                  dispatch,
                  attempts,
                  playerState.abilities.includes("dash"),
                  playerState.abilities.includes("fly")
                );
                console.log("autoMine");
              }}
            >
              Mine Coins
            </button>
          </div>
        </div>
      ) : (
        <div className="unqualified">
          Player does not have required abilities
        </div>
      )}
    </div>
  );
};

export default AutoMine;
