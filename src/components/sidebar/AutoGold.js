import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { map } from "../../util/map";
import { collectTreasure } from "../../util/autoGold";

const AutoGold = () => {
  const [{ gameState }, dispatch] = useStateValue();
  const [attempts, setAttempts] = useState(0);

  const updateAttempts = e => {
    setAttempts(+e.target.value);
  };

  return (
    <div
      className={`modeBox autoGold ${gameState.mode !== "autoGold" &&
        "hidden"}`}
    >
      <div className="modeDescription">
        AutoGold automatically moves player to traverse the map, pick up
        treasure, and sell at the shop.
        <div className="modeReq">
          <span className="reqLabel">Abilities Required:</span> Fly, Recall
        </div>
      </div>
      <div className="autoLimit">
        Enter desired number of minutes to collect gold:
        <div className="autoInput">
          <input type="number" placeholder="#" onChange={updateAttempts} />
          <button
            className="autoAction"
            onClick={() => {
              collectTreasure(dispatch, map, attempts);
              console.log("autoGold");
            }}
          >
            Make Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoGold;
