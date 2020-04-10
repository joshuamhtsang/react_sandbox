import React from 'react';

import './Inventory.css'

let inventory = (props) => {
    return (
        <div className="Inventory"> 
            <p> Inventory</p>
            <p> {props.children} </p>
        </div>
    )
}

export default inventory;