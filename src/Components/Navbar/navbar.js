import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';

function PlanetToggle(props){
    return(
        <div className="toggle">
            <div className="header3">Planet Name</div>
            <div className="arrow"> Arrow</div>
        </div>
    )
}
function SmallStat(props){
    return(
        <div className="smallStat">
            <div className="body1">Size of planet compared to earth</div>
            <div className="body2">Size of Compared to Earth</div>
        </div>
    )
}

function Navbar(props){
    return(
        <div className="navbar">
            <PlanetToggle />
            <div className="details">
                <SmallStat />
                <div className="header2">Mars</div>
                <SmallStat />
            </div>
            <PlanetToggle />
      </div>
)}

export default Navbar;