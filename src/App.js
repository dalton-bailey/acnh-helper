import React from 'react';
import './App.css';
// import Senators from './senators'
// import Representatives from './representatives'
import VillagersList from './villagersList'
import Villagers from './villagers'

function App() {
  return (
    <div className="App">
      {/* <Senators/>
      <Representatives/> */}
      <Villagers/>
      <VillagersList/>
    </div>
  );
}

export default App;
