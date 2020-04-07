import React from 'react';

let inventory = (props) => {
    return (
        <div> 
            <p> Inventory: {props.items} </p>
            <p> {props.children} </p>
        </div>
    )
}

export default inventory;