import { useRef, useEffect } from 'react';
import { MeshStandardMaterial, Color } from 'three';
import { useThree } from '@react-three/fiber';

const CustomMaterial = () => {
  const materialRef = useRef<MeshStandardMaterial | null>(null);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.onBeforeCompile = (shader) => {
        console.log('Shader before compile:', shader);
        
        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <dithering_fragment>',
          `
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Mudando a cor para vermelho
          `
        );
      };
    }
  }, []);

  return (
    <mesh>
      {/* Corrigido para BoxGeometry */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial ref={materialRef} color={new Color(0.5, 0.5, 0.5)} />
    </mesh>
  );
};

export default CustomMaterial;
