import React from 'react';

let inventory = (props) => {
    return (
        <div> 
            <p> Inventory:</p>
            <p> {props.children} </p>
        </div>
    )
}

export default inventory;