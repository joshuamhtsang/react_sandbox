import React from 'react';

let decide_button_text = (item_type) => {
    let text = 'USE'
    if (item_type === 'Weapon') {
        text = 'EQUIP'
    }
    return text
}

let item = (props) => {
    let use_button_text = decide_button_text(props.type)

    return (
        <div>
            <div> Name: {props.name}, Type: {props.type}</div>
            <button> {use_button_text} </button>
        </div>
    )
}

export default item;