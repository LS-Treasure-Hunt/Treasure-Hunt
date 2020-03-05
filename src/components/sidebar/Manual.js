import React from "react";
import DirectionalPad from "./DirectionalPad";
import { useStateValue } from "../../hooks/useStateValue";
import Abilities from "./Abilities";

const Manual = () => {
  const [{ gameState }] = useStateValue();
  return (
    <>
      <div
        className={`manual modeBox ${gameState.mode !== "manual" && "hidden"}`}
      >
        <DirectionalPad />
        <Abilities />
      </div>
    </>
  );
};

export default Manual;
