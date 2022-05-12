import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars } from '@react-three/drei';

import './App.css';

function Planet() {
  // const textureMap = useLoader(TextureLoader, "./images/Mars_Map.jpg");
  return (
    <mesh scale={1}>
      <sphereBufferGeometry attach = "geometry"/>
      <meshStandardMaterial attach="material" />
      {/* <meshLambertMaterial attach="material" color="hotpink"/> */}
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Stars />
      <Planet />
    </Canvas>
  );
}

export default App;