import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export const S23Model = ({ isMobile, position, rotationSpeed }) => {
  const { scene } = useGLTF("/models/s22/samsung_galaxy_s22_ultra.glb");
  const model = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (model.current) {
      const speed = hovered ? rotationSpeed * 1.5 : rotationSpeed;
      model.current.rotation.y += delta * speed;
    }
  });

  if (!scene) return null;

  return (
    <group
      ref={model}
      position={[position[0], position[1] - 1.0, position[2]]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      scale={[0.4, 0.4, 0.4]}
    >
      <primitive object={scene} />
    </group>
  );
};

// Galaxy Buds
export const BudsModel = ({ isMobile, position, rotationSpeed }) => {
  const { scene } = useGLTF("/models/buds/samsung_buds_pro_3.glb");
  const model = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (model.current) {
      const speed = hovered ? rotationSpeed * 1.5 : rotationSpeed;
      model.current.rotation.y += delta * speed;
    }
  });

  if (!scene) return null;

  return (
    <group
      ref={model}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      scale={[1.8, 1.8, 1.8]}
    >
      <primitive object={scene} />
    </group>
  );
};

// Galaxy Watch
export const WatchModel = ({ isMobile, position, rotationSpeed }) => {
  const { scene } = useGLTF("/models/watch/samsung__galaxy__watch_5.glb");
  const model = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (model.current) {
      const speed = hovered ? rotationSpeed * 1.5 : rotationSpeed;
      model.current.rotation.y += delta * speed;
    }
  });

  if (!scene) return null;

  return (
    <group
      ref={model}
      position={[position[0], position[1] + 0.7, position[2]]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      scale={[18.0, 18.0, 18.0]}
    >
      <primitive object={scene} />
    </group>
  );
};

// Galaxy Tab
export const TabModel = ({ isMobile, position, rotationSpeed }) => {
  const { scene } = useGLTF("/models/tab/galaxy_tab_s8_ultra.glb");
  const model = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (model.current) {
      const speed = hovered ? rotationSpeed * 1.5 : rotationSpeed;
      model.current.rotation.y += delta * speed;
    }
  });

  if (!scene) return null;

  return (
    <group
      ref={model}
      position={[position[0], position[1] - 0.8, position[2]]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      dispose={null}
      scale={[0.6, 0.6, 0.6]}
    >
      <primitive object={scene} />
    </group>
  );
};


useGLTF.preload("/models/s22/samsung_galaxy_s22_ultra.glb");
useGLTF.preload("/models/buds/samsung_buds_pro_3.glb");
useGLTF.preload("/models/watch/samsung__galaxy__watch_5.glb");
useGLTF.preload("/models/tab/galaxy_tab_s8_ultra.glb");