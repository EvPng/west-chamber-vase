import React, { Suspense } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "@react-three/drei";
import "./style.css";

function Vase({ murl, turl }) {
  const vaseMesh = useLoader(PLYLoader, "/mesh.ply");
  return <primitive object={vaseMesh} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <Suspense fallback={null}>
        <Vase />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
