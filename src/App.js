import React, { useEffect } from "react";
// import { makeGraph } from "./util/makeGraph";
import { initGame, playerStatus, getBalance } from "./actions/general";
import { useStateValue } from "./hooks/useStateValue";
import "./styles/main.scss";

// components
import Dashboard from "./components/Dashboard";

function App() {
  const [, dispatch] = useStateValue();

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
      <Dashboard />
    </div>
  );
}

export default App;
