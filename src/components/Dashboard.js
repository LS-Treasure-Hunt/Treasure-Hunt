import React from "react";
import { useStateValue } from "../hooks/useStateValue";
import { map } from "../util/map";
import { darkmap } from "../util/darkMap";

// components
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Map from "./Map";

const Dashboard = () => {
  const [{ gameState }] = useStateValue();

  return (
    <div className="dashboard">
      <Header />
      <section className="middle">
        <Map map={gameState.room_id < 500 ? map : darkmap} />
        <Sidebar />
      </section>
    </div>
  );
};

export default Dashboard;
