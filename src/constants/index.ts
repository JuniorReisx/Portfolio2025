export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Work", href: "#work" },
  { id: 5, name: "Technologies", href: "#technologies" },
  { id: 6, name: "Contact", href: "#contact" },
];

export interface Tag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  title: string;
  desc: string;
  subdesc: string;
  href: string;
  texture: string;
  logo: string;
  logoStyle: React.CSSProperties;
  spotlight: string;
  tags: Tag[];
}

export const myProjects: Project[] = [
  {
    title: "Movelo",
    desc: "Movelo is a smart logistics platform that streamlines product distribution and delivery for modern businesses.",
    subdesc:
      "Developed with React, Tailwind CSS, TypeScript, Movelo offers real-time tracking, inventory management, and seamless integration for e-commerce and retail operations.",
    href: "https://movelo-logstica.vercel.app/",
    texture: "/textures/project/movelo.mp4",
    logo: "/assets/caminhao.png",
    logoStyle: {
      backgroundColor: "#004aad",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
    ],
  },
  {
    title: "Lumino",
    desc: "Lumino is a modern, responsive and intelligent chatbot interface built with React, TypeScript, and Tailwind CSS. Designed to be clean, fast, and user-friendly, Lumino connects users with AI-powered conversations that feel smooth and intuitive.",
    subdesc:
      "Built with a focus on conversational AI, Lumino delivers real-time responses, context-aware interactions, and a seamless UI experience. Perfect for businesses and users looking for an intelligent and engaging chatbot solution.",
    href: "https://chat-bot-lumino.vercel.app/",
    texture: "/textures/project/lumini.mp4",
    logo: "/assets/robo.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #1D4ED84D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Gemini AI", path: "/assets/GeminiAi.png" },

    ],
  },
  {
    title: "Azul & Branco",
    desc: "Azul & Branco is a modern e-commerce platform currently in its beta stage, focused on delivering a clean and intuitive UI. While not fully functional yet, the project serves as a foundation for testing design, layout, and user experience.",
    subdesc:
      "Built with React, TypeScript, and Tailwind CSS, Azul & Branco aims to offer a responsive and elegant shopping interface. Currently under development, it's open to feedback and improvements as it evolves toward a fully operational release.",
    href: "https://azul-branco.vercel.app/",
    texture: "/textures/project/azulebranco.mp4",
    logo: "/assets/shirt.jpg",
    logoStyle: {
      backgroundColor: "#060202",
      border: "0.2px solid #1A1A1A",
      boxShadow: "0px 0px 60px 0px #1D4ED84D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
    ],
  },
  {
    title: "Rick and Morty",
    desc: "Rick and Morty is a sleek and responsive React application that allows users to explore characters from the Rick and Morty universe through a clean and dynamic interface powered by GraphQL.",
    subdesc:
      "Featuring lazy-loaded images, detailed character modals, and retry functionality, the app delivers a smooth browsing experience with performance in mind. Built with React, Tailwind CSS, and TypeScript.",
    href: "https://rickandmorty-eosin-five.vercel.app/",
    texture: "/textures/project/rickvideo.mp4",
    logo: "/assets/rickandmorty.jpeg",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #1A1A1A",
      boxShadow: "0px 0px 60px 0px #1D4ED84D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "GraphQL", path: "/assets/GraphQL.png" },
    ],
  }
  
  
  
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export interface WorkExperience {
  id: number;
  name: string;
  pos: string;
  duration: string;
  title: string;
  icon: string;
  animation: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    name: "SIHS - Secretaria de Infraestrutura Hídrica e Saneamento",
    pos: "Infrastructure Analyst",
    duration: "2025 - Present",
    title:
      "I work as an Infrastructure Analyst at SIHS, providing technical support and ensuring the reliability and performance of the department’s IT environment. I manage Windows Server and Active Directory, monitor infrastructure using Zabbix and Grafana, and assist in network configuration and maintenance (TCP/IP, DNS, DHCP).",
    icon: "/assets/sihsr.png",
    animation: "victory",
  },{
    id: 2,
    name: "Paraguaçu Engenharia ",
    pos: "Technical Support",
    duration: "2024 - 2025",
    title:
      "I work on troubleshooting hardware and software issues, ensuring the continuous operation of systems. I perform maintenance and system updates to guarantee efficient and effective IT operations, and provide user support in resolving any doubts or issues.",  
    icon: "/assets/paraguacu.png",
    animation: "victory",
  },
  {
    id: 3,
    name: "Freelancer Self-employed ",
    pos: "Fullstack Developer",
    duration: "2022 - Present",
    title:
      "I develop websites that solve problems, always focusing on delivering scalable, high-performance, and secure systems.",
    icon: "/assets/freela.png",
    animation: "zoom-in",
  }
];
