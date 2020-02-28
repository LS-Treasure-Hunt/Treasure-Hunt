import React from "react";
import Stats from "./Stats";
import Wallet from "./Wallet";
import Gear from "./Gear";
import Inventory from "./Inventory";

const Header = () => {
  return (
    <div className="header">
      <div className="player">
        <Stats />
        <Wallet />
        <Gear />
        <Inventory />
      </div>
      <div className="rightHeader">
        <p>Available real estate.</p>
      </div>
    </div>
  );
};

export default Header;
