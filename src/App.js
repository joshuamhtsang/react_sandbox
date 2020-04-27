import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';
import GearScreen from './components/GearScreen';
import FillableBar from './components/FillableBar';

import Items from './game/Items';

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
    },
    inventory: {
      'sabre': 1,
      'mana potion': 10,
      'ultimate mana potion': 5
    },
    turn: 0
  }

  tick = () => {
    this.setState(state => ({
      turn: state.turn + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
        <p> Turn: {this.state.turn} </p>
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
          {Object.keys(this.state.inventory).map(item => (
            <Item 
            name={Items[item].name} 
            type={Items[item].type}
            picture={Items[item].picture}
            onClick={this.useItemHandler.bind(this, Items[item])}
            />
          ))}
        </Inventory>
        <GearScreen
          gear={this.state.gear}
        />
      </div>
    );
  }
}

export default App;
