import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

interface CubeProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export const Cube: React.FC<CubeProps> = ({
  position = [9, -4, 0],
  rotation = [2.6, 0.8, -1.8],
  scale = 0.74,
  ...props
}) => {
  const { nodes } = useGLTF("models/cube.glb");
  const texture = useTexture("textures/cube.png");

  const cubeRef = useRef<THREE.Mesh | null>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (cubeRef.current) {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(cubeRef.current.rotation, {
          y: hovered ? "+=2" : `+=${Math.PI * 2}`,
          x: hovered ? "+=2" : `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
        });
    }
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        position={position}
        rotation={rotation}
        scale={scale}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={(nodes.Cube as THREE.Mesh).geometry}
          material={(nodes.Cube as THREE.Mesh).material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");
