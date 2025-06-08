import React from "react";
import ScrollFloat from "./ScrollFloat";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

const projectsData = [
  {
    title: "Portfolio",
    description:
      "My online portfolio, made with React, TailwindCSS and deployed in GitHub Pages. Includes experimentation with GSAP animations, tech stack and contact information.",
    techIcons: [<SiReact key="react" color="af5048" size={24} />, <SiTailwindcss key="tw" color="af5048" size={24} />],
    links: {
      github: "https://github.com/usuario/portfolio",
      demo: "https://mi-portfolio.netlify.app",
    },
  },
  {
    title: "TactiX",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/usuario/mern-todo-app",
      demo: "https://todo-mern-app.netlify.app",
    },
  },

    {
    title: "TrainR",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/usuario/mern-todo-app",
      demo: "https://todo-mern-app.netlify.app",
    },
  },

  {
    title: "Chatter",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/usuario/mern-todo-app",
      demo: "https://todo-mern-app.netlify.app",
    },
  },
   {
    title: "jMaps",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/usuario/mern-todo-app",
      demo: "https://todo-mern-app.netlify.app",
    },
  },

  {
    title: "Wannapop",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/usuario/mern-todo-app",
      demo: "https://todo-mern-app.netlify.app",
    },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-neutral-900 text-neutral-100 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <ScrollFloat
          animationDuration={0.6}
          ease="power3.out"
          scrollStart="center bottom"
          scrollEnd="bottom top"
          stagger={0.02}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ScrollFloat
              key={project.title}
              animationDuration={0.5}
              ease="back.inOut(2)"
              scrollStart="center bottom"
              scrollEnd="bottom top"
              stagger={0.03}
            >
              <div className="border border-neutral-700 rounded-lg p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.techIcons.map((IconComp, i) => (
                      <div key={i} className="text-amber-400">
                        {IconComp}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-neutral-300 transition"
                    >
                      <SiGithub size={24} />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-neutral-300 transition"
                    >
                      <SiNetlify size={24} />
                      <span className="font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
