import React, {Suspense, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';

import {Canvas, useLoader, useFrame, useThree} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls, Stars, useTexture, useBounds, Bounds } from '@react-three/drei';


import Planet from './Planet.js';


const planets = { 
    sun:{
      textures: {
        map: "Sun_Map.jpg"
      },
      meshProperties: {
        position: [0, 0, 0]
      }
    },
    mercury: {
      textures:{
        map: "Mercury_Map.jpg",
      },
      meshProperties: {
        position: [3, 0, 0]
      }
    },
    venus: {
      textures:{
        map: "Venus_Map.jpg",
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
    mars: {
      textures:{
        map: "Mars_Map.jpg",
      },
      meshProperties: {
        position: [12, 0, 0]
      }
    },
  };



function Scene(props){

    return(
      <Canvas>
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.75}/>
        <ambientLight intensity={0.03}/>
        <spotLight position={[10, 15, 10]} angle={2} intensity={1} />
        <Stars radius={100} depth={30} count={5000} factor={6} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={0.5}>
            <SelectToZoom>
              <Planet properties={planets.sun} />
              <Planet properties={planets.mercury} />
              <Planet properties={planets.venus} />
              <Planet properties={planets.mars} />
              <Planet properties={planets.earth} />
            </SelectToZoom>
          </Bounds>
        </Suspense>
      </Canvas>
    )
  }

  function SelectToZoom({ children }) {
    const bounds = useBounds()
    return (
      <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && bounds.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && bounds.refresh().fit()}>
        {children}
      </group>
    )
  }


  export default Scene;
