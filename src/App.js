import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';
import GearScreen from './components/GearScreen';
import FillableBar from './components/FillableBar';

import Weapons from './game/Weapons';
import Items from './game/Items';

console.log("App: ", Weapons['club'].attack)

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

  useItemHandler = (itemObject) => {
    if (itemObject.action === 'alter_mana') {
      let mana_change = itemObject.mana_change;
      let finalMana = this.state.characterMana + itemObject.mana_change;
      if (finalMana > this.state.characterBaseMana) {
        finalMana = this.state.characterBaseMana
      }
      this.setState({
        characterMana: finalMana
      })
    } else if (itemObject.action === 'equip') {
      let slot = itemObject.slot;
      console.log(this.state.gear);
      this.setState({
        gear: {
          ...this.state.gear,
          [slot]: itemObject.name
        }
      })
      console.log(this.state.gear)
    } else {
      console.log("!!!ERROR!!! Unknown itemObject.action!");
    }
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
        <FillableBar 
          value={this.state.characterHealth} 
          max={this.state.characterBaseHealth}
          color='#ff0000'
        />
        <FillableBar 
          value={this.state.characterMana} 
          max={this.state.characterBaseMana}
          color='#3366ff'
        />
        <Inventory>
          <Item 
            name={Weapons['sabre'].name} 
            type={Weapons['sabre'].type} 
            slot={Weapons['sabre'].slot} 
            picture={Weapons['sabre'].picture}
            onClick={this.useItemHandler.bind(this, Weapons['sabre'])}
          />

          <Item 
            name={Items['mana potion'].name}
            type={Items['mana potion'].type}
            picture={Items['mana potion'].picture}
            onClick={this.useItemHandler.bind(this, Items['mana potion'])}
          />

          <Item 
            name={Items['ultimate mana potion'].name}
            type={Items['ultimate mana potion'].type}
            picture={Items['ultimate mana potion'].picture}
            onClick={this.useItemHandler.bind(this, Items['ultimate mana potion'])}
          />
        </Inventory>
        <GearScreen
          gear={this.state.gear.righthand}
        />
      </div>
    );
  }
}

export default App;
