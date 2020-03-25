import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import Manual from "./Manual";
import AutoMine from "./AutoMine";
import AutoGold from "./AutoGold";
import AutoSnitch from "./AutoSnitch";
import { SET_MODE } from "../../actions";

const Mode = () => {
  const [{ gameState }, dispatch] = useStateValue();

  return (
    <div className="mode">
      <div className="modeButtonContainer">
        <button
          className={`modeButton ${gameState.mode === "manual" &&
            "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "manual" });
          }}
        >
          MANUAL
        </button>

        <button
          className={`modeButton ${gameState.mode === "autoGold" &&
            "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoGold" });
          }}
        >
          AUTO GOLD
        </button>
        <button
          className={`modeButton ${gameState.mode === "autoMine" &&
            "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoMine" });
          }}
        >
          AUTO MINE
        </button>
        <button
          className={`modeButton ${gameState.mode === "autoSnitch" &&
            "activeMode"}`}
          onClick={() => {
            dispatch({ type: SET_MODE, payload: "autoSnitch" });
          }}
        >
          AUTO SNITCH
        </button>
      </div>
      <Manual />
      <AutoGold />
      <AutoMine />
      <AutoSnitch />
    </div>
  );
};

export default Mode;
