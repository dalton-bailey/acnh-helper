import React from "react";
import "./App.css";
// import Menu from "./components/menu";
// import VillagersList from "./villagersList";
import Villagers from "./components/villagers";
import Bugs from "./components/bugs";
import Fish from "./components/fish";

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Fish />
      <Bugs />
      <Villagers />
      {/* <VillagersList/> */}
    </div>
  );
}

export default App;
