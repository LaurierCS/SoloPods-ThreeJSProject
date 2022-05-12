import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import {Canvas, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';

import './App.css';

function Planet() {
  const props = useTexture({
    map: "Mars_Map.jpg",
  });
  return (
    <mesh scale={1}>
      <sphereBufferGeometry attach = "geometry"/>
      <meshStandardMaterial attach="material" {...props}/>
      {/* <meshLambertMaterial attach="material" color="hotpink"/> */}
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls autoRotate autoRotateSpeed={0.6}/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10, 15, 10]} angle={0.3} />

      <Stars />
      <Planet />
    </Canvas>
  );
}

export default App;