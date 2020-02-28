import React from "react";
import RoomInfo from "./RoomInfo";
import Mode from "./Mode";
import Messages from "./Messages";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <RoomInfo />
      <Messages />
      <Mode />
    </div>
  );
};

export default Sidebar;