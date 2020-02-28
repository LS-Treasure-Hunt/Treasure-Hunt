import React, { useState } from "react";
import { useStateValue } from "../../hooks/useStateValue";

export const Inventory = () => {
  const [{ playerState, gameState }] = useStateValue();
  const [showInventory, setInventory] = useState(false);
  return (
    <>
      <div className="inventory">
        <div
          className="inventory-button"
          onClick={() => setInventory(!showInventory)}
        >
          <p>Inventory {showInventory ? "▸" : "▾"}</p>
        </div>
      </div>
      {showInventory && (
        <div className="inventory-display">
          <h2>Inventory</h2>{" "}
          <ul>
            {playerState.inventory.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </>
  );
};

export default Inventory;
