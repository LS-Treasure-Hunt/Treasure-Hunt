import React, { useEffect } from "react";
// import { makeGraph } from "./util/makeGraph";
import { initGame, playerStatus } from "./actions/general";
import { map } from "./util/map";
import { collectTreasure } from "./util/autoGold";
import { useStateValue } from "./hooks/useStateValue";

// components
import Dashboard from "./components/Dashboard";
import Map from "./components/Map";

function App() {
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    // collectTreasure(dispatch, map);
    initGame(dispatch);
    playerStatus(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      Treasure Hunt!
      <Dashboard />
      <Map map={map} />
    </div>
  );
}

export default App;
