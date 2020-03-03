import React from "react";
import { useStateValue } from "../../hooks/useStateValue";
import ReactCountdownClock from "react-countdown-clock";
import { RESET_TIMER } from "../../actions";

const Timer = () => {
  const [{ gameState }, dispatch] = useStateValue();

  return (
    <>
      <ReactCountdownClock
        seconds={gameState.cooldown}
        color="#fff"
        alpha={0.9}
        size={100}
        onComplete={() => dispatch({ type: RESET_TIMER })}
      />
    </>
  );
};

export default Timer;
