import React from "react";
import DirectionalPad from "./DirectionalPad";
import { useStateValue } from "../../hooks/useStateValue";
import ManualActions from "./ManualActions";
import ManualUniqueActions from "./ManualUniqueActions";


const Manual = () => {
  const [{ gameState }] = useStateValue();
  return (
    <>
      <div
        className={`manual modeBox ${gameState.mode !== "manual" && "hidden"}`}
      >
        <section className="manualLeft"><DirectionalPad />
        <ManualUniqueActions /></section>
        <section className="manualRight"><ManualActions /></section>
      
      </div>
    </>
  );
};

export default Manual;
