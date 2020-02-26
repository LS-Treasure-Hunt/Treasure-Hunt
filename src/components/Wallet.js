import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Wallet = () => {
  const [{ playerState, gameState }] = useStateValue();
  console.log(playerState);
  return (
    <div>
      <div>Wallet</div>
      <div>Gold: {playerState.gold}</div>
      <div>Coins: {gameState.coins}</div>
    </div>
  );
};

export default Wallet;
