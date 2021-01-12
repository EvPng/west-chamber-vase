import React from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "react-three-fiber";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import { OrbitControls } from "@react-three/drei";
import "./style.css";

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
    </Canvas>
  );
}
