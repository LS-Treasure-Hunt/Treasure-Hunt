import React, { useState, useEffect } from "react";
import { useStateValue } from "../../hooks/useStateValue";
import { collectTreasure } from "../../util/autoGold";
import { map } from "../../util/map";
import Manual from "./Manual"

const Mode = () => {
    const [userMode, setUserMode] = useState("manual")
    const [{ gameState }, dispatch] = useStateValue();

    useEffect(() => {
      if (userMode === "autoGold") {
        collectTreasure(dispatch, map)
      } else if (userMode === "autoMine") {
        console.log("autoMine")
      } else if (userMode === "autoSnitch") {
        console.log("autoSnitch")
      } else {
        console.log("ELSE")
      }
    }, [userMode]);

  return (
    
    <div className="mode">
      <div className="modeContainer">
        <label>
          <input type="radio" name="mode" id="manual" checked={userMode === "manual"} onClick={() => setUserMode("manual")} /> MANUAL
        </label>
        <label>
          <input type="radio" name="mode" id="autoGold" checked={userMode === "autoGold"} onClick={() => setUserMode("autoGold")} /> AUTO GOLD
        </label>
        <label>
          <input type="radio" name="mode" id="autoMine" checked={userMode === "autoMine"} onClick={() => setUserMode("autoMine")} /> AUTO MINE
        </label>
        <label>
          <input type="radio" name="mode" id="autoSnitch" checked={userMode === "autoSnitch"} onClick={() => setUserMode("autoSnitch")} /> AUTO SNITCH
        </label>
      </div>
      <Manual />
    </div>
  );
};

export default Mode;
