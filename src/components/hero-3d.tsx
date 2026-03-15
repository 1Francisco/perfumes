"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function AbstractPerfumeBottle() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <capsuleGeometry args={[1.2, 2.5, 32, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.5}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={1}
          ior={1.5}
          color="#f9f1e7"
          resolution={1024}
        />
      </mesh>
      
      {/* Golden Cap mock */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
        <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <AbstractPerfumeBottle />
        
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <Lightformer form="ring" intensity={2} color="white" position={[0, -1, 5]} scale={[10, 10, 1]} />
            <Lightformer form="rect" intensity={1} color="#d4af37" position={[-5, 2, 5]} scale={[2, 10, 1]} />
          </group>
        </Environment>
      </Canvas>
    </div>
  );
}
