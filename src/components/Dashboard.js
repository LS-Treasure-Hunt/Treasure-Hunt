import React, { useState } from "react";
import { useStateValue } from "../hooks/useStateValue";
import { map } from "../util/map";
import { collectTreasure } from "../util/autoGold";

// components
import Abilities from "./Abilities";
import Stats from "./Stats";
import RoomInfo from "./RoomInfo";
import Wallet from "./Wallet";
import Gear from "./Gear";
import Map from "./Map";

const Dashboard = () => {
  const [{ playerState, gameState }, dispatch] = useStateValue();

  return (
    <div className="dashboard">
      <section className="top">
        <Stats />
        <Gear />
        <Wallet />
      </section>
      <section className="middle">
        <RoomInfo />
        <button
          onClick={() => {
            collectTreasure(dispatch, map);
          }}
        >
          AutoGold
        </button>
        <Map map={map} />
      </section>
      <section className="bottom">
        <p className="mode">
          [MODE] Switch between different automated modes. dpad for manual
          directional control, text input for sending request body?
        </p>
        <p className="log">[LOGS]</p>
        <Abilities />
      </section>
    </div>
  );
};

export default Dashboard;
