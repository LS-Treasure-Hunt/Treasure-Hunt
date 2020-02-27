import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import Abilities from "./Abilities";
import Stats from "./Stats";
import RoomInfo from "./RoomInfo";
import Wallet from "./Wallet";
import Gear from "./Gear";



const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();

  return (
    <div className="dashboard">
      <section className="top">
        <Stats />
        <Gear />
        <Wallet />
      </section>
      <section className="middle">
      <RoomInfo />
      </section>
      <section className="bottom">
      <p className="mode">[MODE] Switch between different automated modes. dpad for manual directional control, text input for sending request body?</p>
      <p className="log">[LOGS]</p>
      <Abilities /></section>
     
    </div>
  );
};

export default Dashboard;
