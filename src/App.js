import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';

class App extends Component {
  state = {
    characterName: "Ashenone",
    characterLevel: "241",
    characterBaseHealth: 500,
    characterBaseMana: 500,
    gear: {
      righthand: 'club',
      lefthand: 'wooden shield',
      armour: 'studded armour',
      helmet: 'studded helmet',
      legs: 'plate legs',
      boots: 'leather boots'
    }
  }

  equipItemHandler = () => {
    this.setState({
      gear: {
        ...this.state.gear,
        righthand: 'name'
      }
    })

    console.log(this.state)
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
        <Inventory> 
          <Item name="Sabre" type="Weapon" onClick={this.equipItemHandler}/> 
          <Item name="Mana Potion" type="Usable" onClick={this.equipItemHandler}/> 
        </Inventory>
      </div>
    );
  }
}

export default App;
