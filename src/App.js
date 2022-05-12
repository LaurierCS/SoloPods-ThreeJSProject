import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {Canvas, useLoader, useFrame} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';

import './App.css';

function Planet(props) {

  // const textures = useTexture({
  //   map: props.map,
  // });
  const textures = useTexture(props.details.textures);

  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a/40;
  });

  return (
    <mesh ref={myMesh} {...props.details.meshProperties}>

    {/* <mesh ref={myMesh} position={[1,2,3]}> */}
      <sphereBufferGeometry attach = "geometry"/>
      <meshStandardMaterial attach="material" {...textures}/>
      {/* <meshLambertMaterial attach="material" color="hotpink"/> */}
    </mesh>
  )
}


const planetProperties = { 
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
    <Canvas>
      <OrbitControls autoRotate autoRotateSpeed={0.05}/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15, 10]} angle={3} intensity={2} />
      <Stars />
      <Planet details={planetProperties.mercury} />
      <Planet details={planetProperties.venus} />
      <Planet details={planetProperties.mars} />
      <Planet details={planetProperties.earth} />
      {/* <Planet />
      <Planet /> */}
    </Canvas>
  );
}

export default App;