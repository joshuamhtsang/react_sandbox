import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';
import FillableBar from './components/FillableBar';

import {Weapons as Weapons} from './game/Items'

console.log("App:", Weapons['club'].attack)

const sabre = {
  name: "Sabre",
  type: "Weapon",
  slot: "righthand"
}

class App extends Component {
  state = {
    characterName: "Ashenone",
    characterLevel: "241",
    characterBaseHealth: 500,
    characterBaseMana: 500,
    characterHealth: 450,
    characterMana: 400,
    gear: {
      righthand: 'club',
      lefthand: 'wooden shield',
      armour: 'studded armour',
      helmet: 'studded helmet',
      legs: 'plate legs',
      boots: 'leather boots'
    }
  }

  equipItemHandler = (itemName, slot) => {
    this.setState({
      gear: {
        ...this.state.gear,
        [slot]: itemName
      }
    })
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
        <FillableBar value={this.state.characterHealth} max={this.state.characterBaseHealth}/>
        <Inventory> 
          <Item 
            name={sabre.name} 
            type={sabre.type} 
            slot={sabre.slot} 
            onClick={() => this.equipItemHandler(sabre.name, sabre.slot)}
          />

          <Item name="Mana Potion" type="Usable" onClick={this.equipItemHandler.bind(this)}/>
        </Inventory>
      </div>
    );
  }
}

export default App;
