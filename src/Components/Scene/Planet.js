import React, {useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';

import {Canvas, useLoader, useFrame, useThree} from '@react-three/fiber';
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

  export default Planet;