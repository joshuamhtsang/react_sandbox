import React from 'react';

import './GearScreen.css'

let gearScreen = (props) => {
    return (
        <div className="GearScreen"> 
            <p> Gear Screen </p>
            <p> Right Hand: {props.gear.righthand} </p>
            <p> Left Hand: {props.gear.lefthand} </p>
            <p> Armour: {props.gear.armour} </p>
            <p> Helmet: {props.gear.helmet} </p>
            <p> Legs: {props.gear.legs} </p>
            <p> Boots: {props.gear.boots} </p>
        </div>
    )
}

export default gearScreen;