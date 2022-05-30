import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function LargeStat(props){
    return(
        <div className="stat--large">
            <div className="header1">Value{props.value}</div>
            <div className="body2">Title{props.title}</div>
        </div>
    )
}

function InfoCard(props) {
    return (
      <div className='infoCard'>
          {/* <div className="header1">Planet Stats</div> */}
          <LargeStat />
          <LargeStat />
          <LargeStat />
          <LargeStat />
      </div>
    )
}

export default InfoCard;