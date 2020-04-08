import React from 'react';

let item = (props) => {
    return (
        <div>
            <div> Name: {props.name}, Type: {props.type}</div>
            <button> EQUIP </button>
        </div>
    )
}

export default item;