import React from "react";
import { useStateValue } from "../hooks/useStateValue";

// components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header"

const Dashboard = () => {
  const [{ playerState, gameState }] = useStateValue();

  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
