import React from 'react';

import './FillableBar.css'

const FillableBar = (props) => {
    let percentage = props.value / props.max * 100;
    return (
      <div className="fillable-bar">
        <Filler percentage={percentage} />
      </div>
    )
}
  
const Filler = (props) => {
    return (
        <div className="filler" 
            style={{ background: `#ff0000`, width: `${props.percentage}%` }}>
        </div>
    )
}

export default FillableBar;
