import { Html, useGLTFLoader } from "drei";
import React, {Suspense} from "react";
import { Canvas } from "react-three-fiber";
import "./App.scss";
//Components
import Header from "./components/header";
import {Section} from './components/section'

const Model = () => {
  const gltf = useGLTFLoader('/armchairYellow.gltf', true)
  return <primitive dispose={null} object={gltf.scene} />
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[10, 10, 5]} />
      <directionalLight intensity={1.5} position={[0, 10, ]} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  )
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, 0]}>
        <mesh position={[0, -35, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <div className="title">Hello</div>
          </div>
        </Html>
      </group>
    </Section>
  )
}



export default function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{position: [0, 0, 120], fov: 70}}
      >

          <Lights />
         <Suspense fallback={null}>
             <HTMLContent />
         </Suspense>
         
      </Canvas>
    </>
  );
}
