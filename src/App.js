import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';
import FillableBar from './components/FillableBar';

import {Weapons as Weapons} from './game/Items';
import sabrePicture from './game/itemPictures/Sabre.gif';
import manaPotionPicture from './game/itemPictures/Mana_Potion.gif';

console.log("App:", Weapons['club'].attack)

const sabre = {
  name: "Sabre",
  type: "Weapon",
  slot: "righthand",
  picture: sabrePicture
}

const manaPotion = {
  name: "Mana Potion",
  type: "Usable",
  picture: manaPotionPicture
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

  useManaPotionHandler = () => {
    let finalMana = this.state.characterMana + 50;
    if (finalMana > this.state.characterBaseMana) {
      finalMana = this.state.characterBaseMana
    }
    this.setState({
      characterMana: finalMana
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
            name={sabre.name} 
            type={sabre.type} 
            slot={sabre.slot} 
            picture={sabre.picture}
            onClick={() => this.equipItemHandler(sabre.name, sabre.slot)}
          />

          <Item 
            name={manaPotion.name}
            type={manaPotion.type}
            picture={manaPotion.picture}
            onClick={this.useManaPotionHandler.bind(this)}
          />
        </Inventory>
      </div>
    );
  }
}

export default App;
