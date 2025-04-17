import { Float, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

interface ReactLogoProps {
  position?: [number, number, number];
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

export const ReactLogo: React.FC<ReactLogoProps> = ({
  position = [0, 0, 0],
  scale = [0.3, 0.3, 0.3],
  rotation = [0, 0, 0],
  ...props
}) => {
  const { nodes, materials } = useGLTF("models/react.glb");

  const meshNode = nodes["React-Logo_Material002_0"] as Mesh;

  return (
    <Float floatIntensity={1}>
      <group
        position={position}
        scale={scale}
        rotation={rotation}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={meshNode.geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("models/react.glb");
