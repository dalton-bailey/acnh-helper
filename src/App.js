import React from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
// import Menu from "./components/menu";
// import VillagersList from "./villagersList";
import Villagers from "./components/villagers";
import Bugs from "./components/bugs";
import Fish from "./components/fish";
import ButtonBarApp from "./components/layout";
import Welcome from "./components/home";

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
