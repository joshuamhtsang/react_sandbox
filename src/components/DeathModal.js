import React from 'react';

import './DeathModal.css'

const deathModal = (props) => {
    const showHideClassName = props.show ? 'death-modal display-block' : 'death-modal display-none';
    console.log("showHideClassName = ", showHideClassName);

    return (
        <div className={showHideClassName}> 
            <section className="modal-main">
            <p>Haha you died!</p>
            <button onClick={props.onClick}> Accept </button>
            </section>
        </div>
    )
}

export default deathModal;