import React, { useState, useEffect, useRef } from "react";
import { drop, examine, sell, transmogrify, carry, receive } from "../../actions/";
import { useStateValue } from "../../hooks/useStateValue";
import InventoryActions from './InventoryActions'

export const Inventory = () => {
  const [{ playerState }, dispatch] = useStateValue();
  const [showInventory, setShowInventory] = useState(false); // inventoryMenu visibility
  const [selectedItem, setSelectedItem] = useState(""); // string of item name

//----- hides inventoryMenu when user clicks outside menu
  const node = useRef();
  useEffect(() => {
    if (showInventory) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showInventory]);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) return;
    setSelectedItem(""); // reset item
    setShowInventory(false); // close menu
  };
//----- 

const handleItem = (e, item) => {
   setSelectedItem(item)
  // e.currentTarget.classList.toggle("pressed") - save it for a future sprint - complicates the user expectations
};

const submitAction = (action) => {
    switch(action) {
      case "sell":
        sell(dispatch, selectedItem)
        break
      case "transmogrify":
        transmogrify(dispatch, selectedItem)
        break
      case "examine":
        examine(dispatch, selectedItem)
        break
      case "drop":
        drop(dispatch, selectedItem)
        break
      case "carry":
          carry(dispatch, selectedItem)
          break
      case "receive":
          receive(dispatch)
          break
    } 
    setShowInventory(false); // close menu
    setSelectedItem(""); // reset item
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
              <li key={i} onClick={(e) => handleItem(e, item)}>
                {item}
              </li>
            ))}
          </ul>
        
        <InventoryActions selectedItem={selectedItem} submitAction={submitAction} />
        </div>)}
    </div>
  )
};

export default Inventory;
