import React, from "react";
import { useStateValue } from "../../hooks/useStateValue";

export const Wallet = () => {
  const [{ playerState, gameState }] = useStateValue();
  const [showInventory, setInventory] = useState(false);
  return (
    <>
      <div className="wallet">
        <p>
          Gold: <span className="statValue">{playerState.gold}</span>
        </p>
        <p>
          Coins: <span className="statValue">{gameState.coins}</span>
        </p>
        <p>
          Snitches: <span className="statValue">{playerState.snitches}</span>
        </p>
        </div>
    </>
  );
};

export default Wallet;
