import React from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
// import VillagersList from "./villagersList";
import Villagers from "./components/Villagers";
import Bugs from "./components/Bugs";
import Fish from "./components/Fish";
import ButtonBarApp from "./components/Layout";
import Welcome from "./components/Home";

function App() {
  return (
    <div className="App">
      <ButtonBarApp />
      {/* <Menu /> */}
      <Switch>
        <Route path='/fish' component={Fish} />
        <Route path='/bugs' component={Bugs} />
        <Route path='/villagers' component={Villagers} />
        <Route path='/' exact component={Welcome} />
        {/* <VillagersList/> */}
      </Switch>

    </div>
  );
}

export default App;
