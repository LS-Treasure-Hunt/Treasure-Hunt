import React, { useState, useEffect } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { collectTreasure } from "../../util/autoGold";
import { autoSnitchMiner } from "../../util/autoSnitching";
import { autoCoinMiner } from "../../util/autoMining";
import { map } from "../../util/map";
import Manual from "./Manual";
import { SET_MODE } from "../../actions";

const Mode = () => {
  const [userMode, setUserMode] = useState("manual");
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    if (userMode === "autoGold") {
      collectTreasure(dispatch, map);
    } else if (userMode === "autoMine") {
      console.log("autoMine");
      autoCoinMiner(dispatch);
    } else if (userMode === "autoSnitch") {
      console.log("autoSnitch");
      autoSnitchMiner(dispatch);
    } else {
      console.log("ELSE");
    }
  }, [userMode, dispatch]);

  return (
    <div className="mode">
      <div className="modeContainer">
        <label>
          <input
            type="radio"
            name="mode"
            id="manual"
            checked={userMode === "manual"}
            onClick={() => dispatch({ type: SET_MODE, payload: "manual" })}
          />{" "}
          MANUAL
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            id="autoGold"
            checked={userMode === "autoGold"}
            onClick={() => dispatch({ type: SET_MODE, payload: "autoGold" })}
          />{" "}
          AUTO GOLD
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            id="autoMine"
            checked={userMode === "autoMine"}
            onClick={() => dispatch({ type: SET_MODE, payload: "autoMine" })}
          />{" "}
          AUTO MINE
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            id="autoSnitch"
            checked={userMode === "autoSnitch"}
            onClick={() => dispatch({ type: SET_MODE, payload: "autoSnitch" })}
          />{" "}
          AUTO SNITCH
        </label>
      </div>
      <Manual />
    </div>
  );
};

export default Mode;
