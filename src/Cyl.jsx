import React, { useRef, useState, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

const Cyl = () => {
  const tex = useTexture("/Frame 1.png");
  const cyl = useRef(null);
  const [hovered, setHovered] = useState(false);
  const { size, viewport } = useThree();
  
  // Detect if device is mobile 
  const isMobile = size.width < 768;
  
  // Adjust scale based on device
  const baseScale = isMobile ? 0.8 : 1.2;
  const targetScale = hovered ? baseScale * 1.2 : baseScale;
  
  // Adjust position based on device
  const positionY = isMobile ? 0.1 : 0.3;

  useFrame((state, delta) => {
    if (cyl.current) {
      // rotation speed based on device
      const rotationSpeed = isMobile ? delta * 0.5 : delta * 0.8;
      cyl.current.rotation.y += rotationSpeed;
      
      
      cyl.current.scale.x = THREE.MathUtils.lerp(cyl.current.scale.x, targetScale, 0.1);
      cyl.current.scale.y = THREE.MathUtils.lerp(cyl.current.scale.y, targetScale, 0.1);
      cyl.current.scale.z = THREE.MathUtils.lerp(cyl.current.scale.z, targetScale, 0.1);
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]} position={[0, positionY, 0]}>
      <mesh
        ref={cyl}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={[baseScale, baseScale, baseScale]}
      >
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={tex}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

export default Cyl;