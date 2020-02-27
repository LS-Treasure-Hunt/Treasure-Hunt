import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import Abilities from "./Abilities";
import Stats from "./Stats";
import RoomInfo from "./RoomInfo";
import Wallet from "./Wallet";
import Gear from "./Gear";
import Mode from "./Mode";
import Messages from "./Messages"




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
      <Abilities />
      <RoomInfo />
      </section>
      <section className="bottom">
      <Mode />
      <Messages />
      </section>
     
    </div>
  );
};

export default Dashboard;
