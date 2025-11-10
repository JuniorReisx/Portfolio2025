import { useState } from "react";
const technologies = [
  {
    name: "Windows Server & Active Directory",
    icon: "assets/windowsServer.jpg",
    description: "Management of users, domains, policies, and enterprise systems"
  },
  {
    name: "Zabbix & Grafana",
    icon: "assets/monitoring.png",
    description: "Infrastructure monitoring and performance visualization"
  },
  {
    name: "Linux & PowerShell",
    icon: "assets/linux.jpg",
    description: "Automation, scripting, and system administration across environments"
  },
  {
    name: "React",
    icon: "assets/reactIcon.png",
    description: "Library for building modern, responsive user interfaces"
  },
  {
    name: "TypeScript",
    icon: "assets/typescriptIcon.svg",
    description: "Typed JavaScript for scalable and maintainable applications"
  },
  {
    name: "Node.js & Express",
    icon: "assets/nodeIcon.svg",
    description: "Backend development environment for APIs and server applications"
  },
  {
    name: "Tailwind CSS",
    icon: "assets/tailwindIcon.svg",
    description: "Utility-first framework for fast, responsive UI development"
  },
  {
    name: "Docker",
    icon: "assets/dockerIcon.png",
    description: "Containerization for consistent, scalable, and portable deployments"
  },
  {
    name: "AWS Cloud",
    icon: "assets/aws.png",
    description: "Cloud platform for scalable infrastructure and automation"
  },
  {
    name: "PostgreSQL",
    icon: "assets/post.png",
    description: "Open-source relational database for structured data management"
  },
  {
    name: "Git & GitHub",
    icon: "assets/git.png",
    description: "Version control and collaborative software development"
  },
  {
    name: "Jest",
    icon: "assets/jest.png",
    description: "Testing framework for reliable unit and integration tests"
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
