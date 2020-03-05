import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { collectTreasure } from "../../util/autoGold";

const AutoGold = () => {
  const [{ gameState }, dispatch] = useStateValue();

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
          <input type="number" placeholder="#" />
          <button
            className="autoAction"
            onClick={() => {
              collectTreasure(dispatch);
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
