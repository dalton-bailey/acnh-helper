import React from 'react';
import './App.css';
import VillagersList from './villagersList'
import Villagers from './villagers'
import Memes from './memes'
import Bugs from './bugs'

function App() {
  return (
    <div className="App">
      <Bugs/>
      <Memes/>
      <VillagersList/>
      <Villagers/>
    </div>
  );
}

export default App;
