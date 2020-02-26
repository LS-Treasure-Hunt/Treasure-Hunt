import React, { useEffect } from "react";
// import { makeGraph } from "./util/makeGraph";
import { initGame, playerStatus } from "./actions/general";
import { map } from "./util/map";
import { collectTreasure } from "./util/autoGold";
import { useStateValue } from "./hooks/useStateValue";

// components
import Abilities from "./components/Abilities";
import Wallet from "./components/Wallet";

function App() {
  const [{ gameState }, dispatch] = useStateValue();

  useEffect(() => {
    // collectTreasure(dispatch, map);
    playerStatus(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      Treasure Hunt!
      <Abilities />
      <Wallet />
    </div>
  );
}

export default App;
