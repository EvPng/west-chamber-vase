import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls, useTexture } from "@react-three/drei";
import "./style.css";

function Vase() {
  const vaseMesh = useLoader(PLYLoader, "/mesh.ply");
  // const vaseTex = useTexture("/texture.png");
  // const vaseTex = useLoader(THREE.TextureLoader, "/texture.png")
  // return <primitive object={vaseMesh} />;
  return (
    <>
    <mesh>
      <bufferGeometry geometry={vaseMesh} scale={10, 10, 10} />
      <meshNormalMaterial />
    </mesh>
    <mesh>
      <boxBufferGeometry args={[4, 4, 4]} />
      <meshPhongMaterial color={'hotpink'} />
    </mesh>
    </>
  );
}

export default function App() {
  return (
    <Canvas shadowMap camera={{ position: [5, 5, 10] }} colorManagement={true} >
      <ambientLight intensity={1} color="#e1eced" />
      <pointLight distance={100} position={[10, 10, 30]} intensity={2} color="white" />
      <Suspense fallback={null}>
        <Vase />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
