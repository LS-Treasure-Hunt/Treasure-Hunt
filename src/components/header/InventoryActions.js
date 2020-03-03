import React from "react";
import { useStateValue } from "../../hooks/useStateValue";

const InventoryActions = ({ selectedItem, submitAction }) => {
  const [{ gameState }] = useStateValue();
  return (
    <div className="inventoryActions">
      {selectedItem !== "" ? (
        <><p>Do what with <span className="statValue">{selectedItem}</span>?</p>
          <p className="inventoryButton" onClick={e => submitAction("examine")}>
            Examine
          </p>
          <p className="inventoryButton" onClick={e => submitAction("drop")}>
            Drop
          </p>
          {selectedItem.includes("treasure") && gameState.room_id === 1 && (
            <p className="inventoryButton" onClick={e => submitAction("sell")}>
              Sell
            </p>
          )}
          {(selectedItem.includes("boots") ||
            selectedItem.includes("jacket")) &&
            gameState.room_id === 455 && (
              <p
                className="inventoryButton"
                onClick={e => submitAction("transmogrify")}
              >
                Transmogrify
              </p>
            )}
        </>
      ) : (
        "Select Item"
      )}
    </div>
  );
};

export default InventoryActions;
