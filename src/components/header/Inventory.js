import React, { useState, useEffect, useRef } from "react";
import { drop } from "../../actions/";
// examine, take, drop, sell, status, carry, receive, pray, name change, transmog ???
import { useStateValue } from "../../hooks/useStateValue";

export const Inventory = () => {
  const [{ playerState }, dispatch] = useStateValue();
  const [showInventory, setShowInventory] = useState(false); // inventoryMenu visibility
  const node = useRef(); // for hiding inventoryMenu with outside click
  const [userSelect, setUserSelect] = useState(""); // selected user action
  


//----- hides inventoryMenu when user clicks outside menu

  useEffect(() => {
    if (showInventory) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showInventory]);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) return;
    setShowInventory(false);
  };
//-----


  const selectAction = (value) => {
    // selects action and closes entire menu
    // may require removing visibility of item?
    
  };

  const selectItem = (e, item) => {
    setUserSelect(item)
    console.log(playerState.inventory[0])
    // sets item and displays action options
  };

  return (
    <div ref={node}>
      <div
         
        className={showInventory ? "inventoryButton inventoryPressed" : "inventoryButton"}
        onClick={() => setShowInventory(!showInventory)}
      >
        <p>Inventory {showInventory ? "▴" : "▾"}</p>
      </div>
      {showInventory && (<div 
      className="inventoryMenu">
        
          <ul className="inventoryGrid">
            {playerState.inventory.map((item, i) => (
              <li key={i} onClick={(e) => selectItem(e, item)}>
                {item}
              </li>
            ))}
          </ul>
        
        <div className="inventoryActions">{userSelect ? userSelect : "Select an item to view options"}</div>
      </div>)}
      
    </div>
  );
};

export default Inventory;
