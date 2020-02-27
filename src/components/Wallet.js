import React from "react";
import { useStateValue } from "../hooks/useStateValue";

export const Wallet = () => {
  const [{ playerState, gameState }] = useStateValue();

  return (
    <div>
      <div>Wallet</div>
      <div>Gold: {playerState.gold}</div>
      <div>Coins: {gameState.coins}</div>
      <div>Snitches: {playerState.snitches}</div>
      <div>
        Inventory:{" "}
        {playerState.inventory.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
