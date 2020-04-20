import React from 'react';

import './Item.css'

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
        <div className='Item' onClick={props.onClick}>
            <img src={props.picture} className="ItemPicture"/>
            <div> Name: {props.name}, </div>
            <div>Type: {props.type}, Slot: {props.slot}</div>
            <button onClick={props.onClick}> {useButtonText} </button>
        </div>
    )
}

export default item;