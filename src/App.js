import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Scene from './Components/Scene/Scene.js';
import Navbar from './Components/Navbar.js';
import InfoCard from './Components/InfoCard.js';

// Nasa Api
// My Api Key - AojNQfezQHH0T0KZEmqoWCmN0sAB95aHQNZ8m8cQ
// Account Email: straightup.stack@gmail.com
// Account ID: b5926556-37db-45fe-81b4-dcb6f9430111
// Usage: https://api.nasa.gov/planetary/apod?api_key=AojNQfezQHH0T0KZEmqoWCmN0sAB95aHQNZ8m8cQ
function getPlanetApiData(){
  // This code stores the planet json in localstorage if its not already there
  // This reduces the number of api calls made and trivially is faster for
  if (localStorage.getItem('planetaryData') == null){
      
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log(data);
      planetaryData = data;
      window.localStorage.setItem('planetaryData', JSON.stringify(planetaryData));
    });
  }
  
  var planetaryData = JSON.parse(localStorage.getItem('planetaryData'));
  planetaryData = planetaryData.bodies.filter((planet) => {
    return planet.isPlanet == true;
  });
  console.log(planetaryData);

  return (planetaryData);
}


const planetaryData = getPlanetApiData();
// console.log(planetaryData);

function App() {
  return (
    <>
      <div className='parent'> Hello world
        <Scene />
      </div>
    </>
  );
}

export default App;