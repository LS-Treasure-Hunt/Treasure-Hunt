import React, { useEffect } from "react";
// import { makeGraph } from "./util/makeGraph";
import { initGame, playerStatus, getBalance } from "./actions/general";
import { useStateValue } from "./hooks/useStateValue";
import "./styles/main.scss";

// components
import Dashboard from "./components/Dashboard";
import Overlay from "./components/Overlay";

function App() {
  const [{ playerState, gameState, miningState }, dispatch] = useStateValue();

  useEffect(() => {
    async function fetchData() {
      await initGame(dispatch);
      await playerStatus(dispatch);
      await getBalance(dispatch);
    }
    fetchData();
  }, [dispatch]);

  

  return (
    <div className="app">
      {(playerState.isLoading === true || gameState.isLoading === true || miningState.isLoading === true) ? <Overlay /> : null}
      <Dashboard />
    </div>
  );
}

export default App;
