import React from "react";
import Stats from "./Stats";
import Wallet from "./Wallet";
import Gear from "./Gear";

const Header = () => {
  return (
    <div className="header">
      <div className="player">
        <Stats />
        <Wallet />
        <Gear />
      </div>
      <div className="rightHeader">
        <p>Available real estate.</p>
      </div>
    </div>
  );
};

export default Header;
