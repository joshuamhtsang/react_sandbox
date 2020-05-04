import React from 'react';

import './DeathModal.css'

const deathModal = (props) => {
    const showHideClassName = props.show ? 'death-modal display-block' : 'death-modal display-none';
    console.log("showHideClassName = ", showHideClassName);

    return (
        <div className={showHideClassName}> 
            Haha you died!
        </div>
    )
}

export default deathModal;