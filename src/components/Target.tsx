import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import gsap from "gsap";

interface TargetProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  animate?: boolean;
}

export const Target: React.FC<TargetProps> = ({
  position = [0, 0, 0],
  rotation = [0, Math.PI / 5, 0],
  scale = 1.5,
  animate = true,
}) => {
  const targetRef = useRef<Mesh | null>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useEffect(() => {
    if (targetRef.current && animate) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [animate]);

  return (
    <mesh {...{ position, rotation, scale }} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  );
};
