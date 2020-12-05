import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VillagersLayout from "./components/VillagersLayout";
import BugsLayout from "./components/BugsLayout";
import FishLayout from "./components/FishLayout";
import SeaLayout from "./components/CreaturesLayout";
// import Layout from "./components/Layout";
import Home from "./components/Home";
import { AnimalCrossingContextProvider } from "./contexts/AnimalCrossingContext";

function App() {
  return (
    <AnimalCrossingContextProvider>
      <div className="App">
        {/* <Layout /> */}
        <Home />
        <Switch>
          <Route path='/fish' component={FishLayout} />
          <Route path='/bugs' component={BugsLayout} />
          <Route path='/seacreatures' component={SeaLayout} />
          <Route path='/villagers' component={VillagersLayout} />
          {/* <Route path='/' exact component={Welcome} /> */}
        </Switch>
      </div>
    </AnimalCrossingContextProvider>
  );
}

export default App;
