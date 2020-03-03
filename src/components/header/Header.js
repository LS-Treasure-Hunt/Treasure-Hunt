import React from "react";
import Stats from "./Stats";
import Inventory from "./Inventory";

const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <Stats />
        <Inventory />
      </div>
      <div className="rightHeader">
        <h1>Lambda Treasure Hunt!</h1>
      </div>
    </div>
  );
};

export default Header;
