import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import {Canvas, useLoader, useFrame, useThree} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';

import Scene from './Components/Scene/Scene.js';
import Navbar from './Components/Navbar.js';

function InfoCard(props){
  return(
    <div className='InfoCard'>

    </div>
  )
}

function App() {
  return (
    <>
      <div className='parent'> Hello world
        <Scene />
        <Navbar />
      </div>
    </>
  );
}

export default App;