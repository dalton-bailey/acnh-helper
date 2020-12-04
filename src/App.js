import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import VillagersLayout from "./components/VillagersLayout";
// import SearchPage from "./components/SearchPage";
import BugsLayout from "./components/BugsLayout";
import FishLayout from "./components/FishLayout";
// import Layout from "./components/Layout";
import Welcome from "./components/Home";
import { AnimalCrossingContextProvider } from "./contexts/AnimalCrossingContext";

function App() {
  return (
    <AnimalCrossingContextProvider>
      <div className="App">
        {/* <Layout /> */}
        <Switch>
          <Route path='/fish' component={FishLayout} />
          <Route path='/bugs' component={BugsLayout} />
          <Route path='/villagers' component={VillagersLayout} />
          {/* <Route path='/villagers' component={SearchPage} /> */}
          <Route path='/' exact component={Welcome} />
        </Switch>
      </div>
    </AnimalCrossingContextProvider>
  );
}

export default App;
