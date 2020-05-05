import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import Item from './components/Item';
import GearScreen from './components/GearScreen';
import FillableBar from './components/FillableBar';
import DeathModal from './components/DeathModal';

import Items from './game/Items';

const turnsPerActionPoint = 4;
const maxActionPoints = 1;

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
      'ultimate mana potion': 5,
      'slime potion': 1
    },
    turn: 0,
    actionPoints: maxActionPoints,
    deathModal: false
  }

  tick = () => {
    this.setState(prevState => ({
      turn: prevState.turn + 1
    }));

    let alive = this.checkAlive();
    console.log("alive = ", alive);

    if (alive === false) {
      console.log("You have died.")
      console.log("showDeathModal = ", this.state.deathModal)
      this.showDeathModal();
    }

    if (this.state.turn % turnsPerActionPoint === 0) {
      this.setState(prevState => ({
        actionPoints: prevState.actionPoints < maxActionPoints ? prevState.actionPoints + 1 : maxActionPoints
      }));
      console.log("actionPoints = ", this.state.actionPoints)
    }
    
  }

  showDeathModal = () => {
    this.setState({ deathModal: true });
  }

  hideDeathModal = () => {
    this.setState({ deathModal: false });
  }

  respawnCharacter = () => {
    this.setState({ 
      characterHealth: this.state.characterBaseHealth,
      characterMana: this.state.characterBaseMana
    });
  }

  acceptDeathHandler = () => {
    this.hideDeathModal();
    this.respawnCharacter();
  }

  checkAlive = () => {
    return this.state.characterHealth > 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  useItemHandler = (itemObject) => {
    if (this.state.actionPoints > 0) {
      this.setState(prevState => ({
        actionPoints: prevState - 1
      }))

      if (itemObject.action === 'alter_mana') {
        let mana_change = itemObject.mana_change;
        let finalMana = this.state.characterMana + mana_change;
        if (finalMana > this.state.characterBaseMana) {
          finalMana = this.state.characterBaseMana;
        }
        if (finalMana < 0) {
          finalMana = 0;
        }
        this.setState({
          characterMana: finalMana
        })
      } if (itemObject.action === 'alter_health') {
        let health_change = itemObject.health_change;
        let finalHealth = this.state.characterHealth + health_change;
        if (finalHealth > this.state.characterBaseHealth) {
          finalHealth = this.state.characterBaseHealth
        }
        if (finalHealth < 0) {
          finalHealth = 0;
        }
        this.setState({
          characterHealth: finalHealth
        })
      } else if (itemObject.action === 'equip') {
        let slot = itemObject.slot;
        console.log(this.state.gear);
        this.setState(prevState => ({
          gear: {
            ...prevState.gear,
            [slot]: itemObject.name
          }
        }))
        console.log(this.state.gear)
      } else {
        console.log("!!!ERROR!!! Unknown itemObject.action!");
      }
    } else {
      console.log("Insufficient action points!")
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
        <DeathModal
          show={this.state.deathModal}
          onClick={this.acceptDeathHandler.bind(this)}
        />
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
          {Object.keys(this.state.inventory).map((item, i) => (
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
