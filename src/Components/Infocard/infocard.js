import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';

function Infocard(props){
    return (
        <div className='infocard'>
            <body>
            <p className ='header'>23</p>
            <p className ='info'>Length of Year</p>
            <p className = 'header'>1.5AU</p>
            <p className ='info'>Distance from sun</p>
            <p className = 'header'>23</p>
            <p className ='info'>Moons</p>
            <p className = 'header'>400</p>
            <p className ='info'>Length of year in earth years</p>
            </body>
        </div>
    )
}

export default Infocard;