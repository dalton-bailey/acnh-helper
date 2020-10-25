import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Villagers from "./components/Villagers";
import Bugs from "./components/Bugs";
import Fish from "./components/Fish";
import Layout from "./components/Layout";
import Welcome from "./components/Home";
import { AnimalCrossingContextProvider } from "./contexts/AnimalCrossingContext";

function App() {
  return (
    <AnimalCrossingContextProvider>
      <div className="App">
        <Layout />
        <Switch>
          <Route path='/fish' component={Fish} />
          <Route path='/bugs' component={Bugs} />
          <Route path='/villagers' component={Villagers} />
          <Route path='/' exact component={Welcome} />
        </Switch>
      </div>
    </AnimalCrossingContextProvider>
  );
}

export default App;
