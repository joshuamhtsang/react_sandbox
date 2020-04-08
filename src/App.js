import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';

class App extends Component {
  state = {
    characterName: "Ashenone",
    characterLevel: "241"
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Character Name: {this.state.characterName}.</p>
        <p>Character Level: {this.state.characterLevel}.</p>
        <Inventory items="Katana"> <Item name="Sabre" type="Weapon"/> </Inventory>
      </div>
    );
  }
}

export default App;
