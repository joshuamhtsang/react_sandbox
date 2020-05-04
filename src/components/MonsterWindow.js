import React from 'react';

import './MonsterWindow.css'

let monsterWindow = (props) => {
    return (
        <div> 
            <p> Monsters Window </p>
            <p> {props.children} </p>
        </div>
    )
}

export default monsterWindow;
