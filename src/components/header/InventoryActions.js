import React from "react";
import { useStateValue } from "../../hooks/useStateValue";

const InventoryActions = ({ selectedItem, submitAction }) => {
  const [{ playerState,gameState }] = useStateValue();

  return (
    <div className="inventoryActions">
      {selectedItem !== "" ? (
        <><p>Do what with <span className="invValue">{selectedItem}</span>?</p>
          <p className="inventoryButton" onClick={e => submitAction("examine")}>
            Examine
          </p>
          <p className="inventoryButton" onClick={e => submitAction("drop")}>
            Drop
          </p>
          {gameState.room_id === 1 && (
            <p className="inventoryButton" onClick={e => submitAction("sell")}>
              Sell
            </p>
          )}
          {gameState.room_id === 495 && (
              <p
                className="inventoryButton"
                onClick={e => submitAction("transmogrify")}
              >
                Transmogrify
              </p>
            )}
          {playerState.abilities.includes("carry") && (
              <p
                className="inventoryButton"
                onClick={e => submitAction("carry")}
              >
                Carry
              </p>
            )}
        </>
      ) : (
        <p>Select item.</p>
      )}
      {playerState.status.length > 0 && (<><p>{playerState.status}<span onClick={e => submitAction("receive")} className="statValue">Return item.</span></p></>)}
    </div>
  );
};

export default InventoryActions;
