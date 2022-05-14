import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import arrow_left from '../images/icons/arrow_left.png';
import arrow_right from '../images/icons/arrow_right.png';

function PlanetToggle(props){
    return(
        <div className={"toggle " + props.direction}>
            {props.direction == "right" &&
            <img src={props.icon} alt="" />}

            <div className="header3">{props.planet} Planet Name</div>

            {props.direction == "left" &&
            <img src={props.icon} alt="" />}
        </div>
    )
}
function SmallStat(props){
    return(
        <div className={"stat--small " + props.direction}>
            <div className="body1">{props.value}</div>
            <div className="body2">{props.title}</div>
        </div>
    )
}

function Navbar(props){
    const stat1 = {title:"Size Compared to Earth", value: "36500"};
    const stat2 = {title:"Days in Planet's Lunar Year", value: "36500"};

    return(
        <div className="navbar">
            <PlanetToggle icon={arrow_left} direction={"left"} />
            {/* <PlanetToggle icon={arrow_left} direction={"left"} planet={props.last_planet}/> */}
            <div className="footer">
                <SmallStat {...stat1} direction={"left"} />
                <div className="header1">Mars</div>
                <SmallStat {...stat2} direction={"right"} />
            </div>
            <PlanetToggle icon={arrow_right} direction={"right"} />
            {/* <PlanetToggle icon={arrow_right} direction={"right"} planet={props.next_planet}/> */}
      </div>
)}

export default Navbar;