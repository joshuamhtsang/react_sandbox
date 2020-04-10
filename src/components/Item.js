import React from 'react';

let decideButtonText = (itemType) => {
    let text = 'USE'
    if (itemType === 'Weapon') {
        text = 'EQUIP'
    }
    return text
}

let item = (props) => {
    let useButtonText = decideButtonText(props.type)

    return (
        <div>
            <div> Name: {props.name}, Type: {props.type}</div>
            <button onClick={props.onClick}> {useButtonText} </button>
        </div>
    )
}

export default item;