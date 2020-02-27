import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import Abilities from "./Abilities";
import Wallet from "./Wallet";
import Gear from "./Gear";
import Stats from "./Stats";
import RoomInfo from "./RoomInfo";

const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();
  return (
    <div>
      <Stats />
      <Abilities />
      <Wallet />
      <Gear />
      <RoomInfo />
    </div>
  );
};

export default Dashboard;
