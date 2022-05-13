import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Navbar from './Components/Navbar/navbar.js';

import {Canvas, useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';


function Planet(props) {

  const textures = useTexture(props.properties.textures);

  const myMesh = useRef();
  const [click, setClick] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a/40;
  });

  return (
    <mesh ref={myMesh} {...props.properties.meshProperties}>
      <sphereBufferGeometry attach = "geometry"/>
      <meshStandardMaterial attach="material" {...textures}/>
    </mesh>
  )
}

function Scene(props){
  return(
    <Canvas>
      <OrbitControls autoRotate autoRotateSpeed={0.05}/>
      <ambientLight intensity={0.03}/>
      <spotLight position={[10, 15, 10]} angle={2} intensity={1} />
      <Stars />
      <Planet properties={planets.mercury} />
      <Planet properties={planets.venus} />
      <Planet properties={planets.mars} />
      <Planet properties={planets.earth} />
      {/* <Planet />
      <Planet /> */}
    </Canvas>
  )
}

const planets = { 
  mercury: {
    textures:{
      map: "Mercury_Map.jpg",
    },
    meshProperties: {
      position: [0, 0, 0]
    }
  },
  venus: {
    textures:{
      map: "Venus_Map.jpg",
    },
    meshProperties: {
      position: [3, 0, 0]
    }
  },
  mars: {
    textures:{
      map: "Mars_Map.jpg",
    },
    meshProperties: {
      position: [6, 0, 0]
    }
  },
  earth: {
    textures:{
      map: "Earth_Map.jpg",
    },
    meshProperties: {
      position: [9, 0, 0]
    }
  },
};

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