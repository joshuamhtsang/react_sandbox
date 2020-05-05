import React from 'react';

import './Item.css'

let item = (props) => {
    return (
        <div className='Item' onClick={props.onClick}>
            <img src={props.picture} className="ItemPicture"/>
            <div> Name: {props.name} </div>
            <div> Type: {props.type} </div>
            <div> Amount: {props.amount} </div>
            {props.slot ? <div> Slot: {props.slot}  </div> : <div></div>}
        </div>
    )
}

export default item;