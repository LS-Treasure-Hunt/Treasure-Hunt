import React, { useState } from "react"
import { drop } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";

export const Inventory = () => {
  const [{ playerState }, dispatch] = useStateValue();
  const [showInventory, setShowInventory] = useState(false);

    const userDrop = (e,target) => {
      console.log(e, target)
    drop(dispatch, target)
  }

  return (
    <div className="inventory">
        <div
          className="inventoryButton"
          onClick={() => setShowInventory(!showInventory)}
        >
          <p>Inventory {showInventory ? "▸" : "▾"}</p>
        </div>
        <div className="inventoryDisplay">
        {showInventory && (
            <ul>
              {playerState.inventory.map((item, i) => (
                <li key={i} onClick={(e) => userDrop(e,item)}>{item}</li>
              ))}
            </ul>
          
        )}
        </div>
    </div>
  );
};

export default Inventory;
