import React, {useState} from "react";
import DirectionalPad from "./manual/DirectionalPad";
import Abilities from "./manual/Abilities";

const Mode = () => {
    const [userMode, setUserMode] = useState("manual")
  return (
    <div className="mode">
      <h1>Select Mode</h1>
      <div>
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
      <DirectionalPad />
      <Abilities />
    </div>
  );
};

export default Mode;
