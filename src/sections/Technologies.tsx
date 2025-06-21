import { useState } from "react";

const technologies = [
  {
    name: "React",
    icon: "assets/reactIcon.png",
    description: "JavaScript library for building interactive user interfaces"
  },
  {
    name: "Tailwind CSS",
    icon: "assets/tailwindIcon.svg",
    description: "Utility-first CSS framework for rapid development"
  },
  {
    name: "Node.js",
    icon: "assets/nodeIcon.svg",
    description: "JavaScript runtime environment for server-side development"
  },
  {
    name: "TypeScript",
    icon: "assets/typescriptIcon.svg",
    description: "Typed superset of JavaScript that compiles to plain JavaScript"
  },
  {
    name: "Express",
    icon: "assets/expressIcon.png",
    description: "Minimalist web framework for Node.js"
  },
  {
    name: "Cloud Computing AWS",
    icon: "assets/aws.png",
    description: "Cloud computing services provided by Amazon Web Services"
  },
  {
    name: "PostgreSQL",
    icon: "assets/post.png",
    description: "Advanced open-source relational database management system"
  },
  {
    name: "Docker",
    icon: "assets/dockerIcon.png",
    description: "Platform for building, deploying, and running applications in containers"
  },
  {
    name: "Git",
    icon: "assets/git.png",
    description: "Distributed version control system to track code changes"
  },
  {
    name: "Jest",
    icon: "assets/jest.png",
    description: "JavaScript testing framework focused on simplicity"
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
                  className="w-30 h-30 object-contain"
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