import { useState } from "react";

const technologies = [
  {
    name: "React",
    icon: "assets/reactIcon.png",
    description: "Biblioteca JavaScript para criar interfaces de usuário interativas"
  },
  {
    name: "Tailwind CSS",
    icon: "assets/tailwindIcon.svg",
    description: "Framework CSS utilitário para desenvolvimento rápido"
  },
  {
    name: "Node.js",
    icon: "assets/nodeIcon.svg",
    description: "Ambiente de execução JavaScript do lado do servidor"
  },
  {
    name: "TypeScript",
    icon: "assets/typescriptIcon.svg",
    description: "Superset tipado de JavaScript que compila para JavaScript puro"
  },
  {
    name: "Express",
    icon: "assets/expressIcon.png",
    description: "Framework web minimalista para Node.js"
  }
];

export function Technologies() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="c-space my-20" id="technologies">
      <div className="w-full">
        <p className="grid-headtext mb-8">My Tech Stack</p>
        
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="grid-container h-full transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="flex justify-center items-center p-6 h-40">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              <div className="text-center p-4">
                <p className="grid-subtext font-bold">{tech.name}</p>
                <p className={`grid-subtext text-sm mt-2 transition-opacity duration-300 ${hoveredTech === tech.name ? 'opacity-100' : 'opacity-70'}`}>
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}