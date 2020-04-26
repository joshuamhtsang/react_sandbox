import React from 'react';

import './GearScreen.css'

let gearScreen = (props) => {
    return (
        <div className="GearScreen"> 
            <p> Gear Screen </p>
            <p> Right Hand: {props.gear} </p>
        </div>
    )
}

export default gearScreen;