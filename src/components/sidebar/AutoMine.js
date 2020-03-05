import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { autoCoinMiner } from "../../util/autoMining";

const AutoMine = () => {
  const [{ gameState }, dispatch] = useStateValue();

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
      <div className="autoLimit">
        Enter desired number of mining attempts:
        <div className="autoInput">
          <input type="number" placeholder="#" />
          <button
            className="autoAction"
            onClick={() => {
              autoCoinMiner(dispatch);
              console.log("autoMine");
            }}
          >
            Mine Coins
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoMine;
