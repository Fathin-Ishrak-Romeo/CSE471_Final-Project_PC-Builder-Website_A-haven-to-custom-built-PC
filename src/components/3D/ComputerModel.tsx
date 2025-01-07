import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/computer/model.gltf';

export function ComputerModel({ ...props }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF(MODEL_URL);

  // Preload the model
  useEffect(() => {
    useGLTF.preload(MODEL_URL);
  }, []);

  useFrame((state) => {
    if (group.current) {
      // Smooth floating animation
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer.geometry}
        material={materials.Computer}
        position={[0, -1, 0]}
        scale={[0.8, 0.8, 0.8]}
      />
    </group>
  );
}