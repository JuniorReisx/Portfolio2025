import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import { toVector3 } from "../utils/toVector3";
import { Cube } from "../components/Cube";
import { Rings } from "../components/Rings";
import { ReactLogo } from "../components/ReactLogo";
import { Button } from "../components/Button";
import { Target } from "../components/Target";
import { CanvasLoader } from "../components/Loading";
import { HeroCamera } from "../components/HeroCamera";
import { calculateSizes } from "../constants/index";
import { HackerRoom } from "../components/HackerRoom";

export function Hero() {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const ringPosition: [number, number, number] = [
    sizes.ringPosition[0] ?? 0,
    sizes.ringPosition[1] ?? 0,
    sizes.ringPosition[2] ?? 0,
  ];
  const deskPosition: [number, number, number] = [
    sizes.deskPosition[0] ?? 0,
    sizes.deskPosition[1] ?? 0,
    sizes.deskPosition[2] ?? 0,
  ];

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/80 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-900/20 to-transparent z-0"></div>
      
      <div className={`relative z-10 w-full max-w-6xl mx-auto flex flex-col sm:mt-36 mt-20 px-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col gap-3 items-center">
          <p className="text-neutral-400 tracking-wider uppercase text-sm font-medium">Fullstack Developer</p>
          <h1 className="sm:text-4xl text-2xl font-bold text-white text-center font-generalsans">
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Junior Reis</span> <span className="inline-block animate-wave origin-bottom-right ml-1">👋</span>
          </h1>
        </div>
      </div>
      
      {/* Mobile Static Image (Only shown on mobile) */}
      {isMobile && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center ">
            <img 
              src="/assets/pc.png" 
              alt="Developer Workspace" 
              className="w-f[%100] h-[%50] object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          </div>
        </div>
      )}
      
      {/* 3D Canvas (Only shown on non-mobile) */}
      {!isMobile && (
        <div className="w-full h-full absolute inset-0 z-0">
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <Leva hidden />
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={deskPosition}
                  rotation={[0.1, -Math.PI, 0]}
                />
              </HeroCamera>

              <group>
                <Target
                  position={sizes.targetPosition as [number, number, number]}
                />
                <ReactLogo
                  position={toVector3(sizes.reactLogoPosition)}
                  scale={[1.5, 1.5, 1.5]}
                  rotation={[0, 0, 0]}
                />

                <Rings position={ringPosition} />
                <Cube
                  position={[9, -7, 2]}
                  rotation={[Math.PI / 2, 2, 0]}
                  scale={1}
                />
              </group>

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
              <pointLight position={[-10, -10, -10]} color="#3b82f6" intensity={0.8} />
            </Suspense>
          </Canvas>
        </div>
      )}

      <div className={`absolute top-1/2 left-4 z-10 flex flex-col gap-6 transition-all duration-1000 sm:flex hidden ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        <a href="https://github.com/JuniorReisx" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/gil-maik-junior/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      <div className={`absolute bottom-10 left-0 right-0 w-full z-10 px-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-md mx-auto">
          <a href="#about" className="w-full sm:w-fit block">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
      </div>
      
    </section>
  );
}