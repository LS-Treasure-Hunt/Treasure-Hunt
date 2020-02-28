import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import RoomInfo from "./RoomInfo";
import Mode from "./Mode";
import Messages from "./Messages"
import Header from "./header/Header"

const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();

  return (
    <div className="dashboard">
        <Header />
      <section className="middle">
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
