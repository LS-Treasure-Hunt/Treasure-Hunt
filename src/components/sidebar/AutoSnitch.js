import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { autoSnitchMiner } from "../../util/autoSnitching";

const AutoSnitch = () => {
  const [{ gameState }, dispatch] = useStateValue();

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
          {" "}
          <span className="reqLabel">Other Requirements:</span> Bodywear,
          Footwear
        </div>
      </div>
      <div className="autoLimit">
        Enter desired number of snitching attempts:
        <div className="autoInput">
          <input type="number" placeholder="#" />
          <button
            className="autoAction"
            onClick={() => {
              autoSnitchMiner(dispatch);
              console.log("autoSnitch");
            }}
          >
            Collect Snitches
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutoSnitch;
