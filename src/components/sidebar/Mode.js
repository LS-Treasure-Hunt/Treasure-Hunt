import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { collectTreasure } from "../../util/autoGold";
import { autoSnitchMiner } from "../../util/autoSnitching";
import { autoCoinMiner } from "../../util/autoMining";
import { map } from "../../util/map";
import Manual from "./Manual";
import { SET_MODE } from "../../actions";

const Mode = () => {
  const [{ gameState }, dispatch] = useStateValue();

  return (
    <div className="mode">
      <div className="modeContainer">
        <button
          className={`${gameState.mode === "manual" && "activeMode"}`}
          onClick={() => dispatch({ type: SET_MODE, payload: "manual" })}
        >
          MANUAL
        </button>

        <button
          className={`${gameState.mode === "autoGold" && "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoGold" });
            collectTreasure(dispatch, map);
            console.log("autoGold");
          }}
        >
          AUTO GOLD
        </button>
        <button
          className={`${gameState.mode === "autoMine" && "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoMine" });
            autoCoinMiner(dispatch);
            console.log("autoMine");
          }}
        >
          AUTO MINE
        </button>
        <button
          className={`${gameState.mode === "autoSnitch" && "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoSnitch" });
            autoSnitchMiner(dispatch);
            console.log("autoSnitch");
          }}
        >
          AUTO SNITCH
        </button>
      </div>
      <Manual />
    </div>
  );
};

export default Mode;
