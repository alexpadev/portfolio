import ScrollFloat from "./ScrollFloat";
import { SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiNodedotjs, SiExpress, SiPostgresql, SiPhp, SiLaravel, SiBootstrap, SiFilament, SiComposer, SiPostman, SiMariadb, SiEjs } from "react-icons/si";
import { MdInsertLink } from 'react-icons/md'

const projectsData = [
  {
    title: "Portfolio",
    description:
      "My online portfolio, made with React, TailwindCSS and deployed in GitHub Pages. It has experimentation with GSAP animations aswell. Includes personal information, tech stack, projects and contact information.",
    techIcons: [<SiReact key="react" color="af5048" size={24} />, <SiTailwindcss key="tw" color="af5048" size={24} />],
    links: {
      github: "https://github.com/alexpadev/portfolio",
      demo: "https://mi-portfolio.netlify.app",
    },
  },
  {
    title: "Tactix",
    description:
      "Aplicación de gestión de tareas (To-Do) con autenticación de usuarios. Backend en Node.js + Express y base de datos MongoDB. Frontend en React.",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="node" color="af5048" size={24} />,
      <SiEjs key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiMariadb className="mr-1" key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/alexpadev/tactix",
      demo: "https://todo-mern-app.netlify.app",
    },
  },

    {
    title: "TrainR",
    description:
      "App where users can manage their own routines. Backend made with NodeJs with Express, frontend made with React. Database based on PostgreSQL. ",
    techIcons: [
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="node" color="af5048" size={24} />,
      <SiPostgresql key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/alexpadev/trainR",
      demo: "https://trainr-ru6t.onrender.com/",
    },
  },

  {
    title: "Chatter",
    description:
      "Real-time chatting app. Backend based on NodeJS with Express and Frontend on React. Database with MongoDB and styles with TailwindCSS. User authentication with email verification, individual and group chat via websocket. AI chatbot with Gemini API.",
    techIcons: [
      
      <SiJavascript key="node" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="node" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/alexpadev/chatter",
      demo: "https://todo-mern-app.netlify.app",
    },
  },
   {
    title: "jMaps",
    description:
      "App where users can create places, which have questions and reviews created by the community. This places can be seen in a world map made with React-leaflet package. Made with Laravel for the backend and React for the frontend.",
    techIcons: [
      <SiPhp key="node" color="af5048" size={24} />,
      <SiLaravel className="ml-1" key="node" color="af5048" size={24} />,
      <SiFilament className="ml-1" key="node" color="af5048" size={38} />,
      <SiComposer className="ml-1" key="node" color="af5048" size={24} />,
      <SiPostman className="ml-1" key="node" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiBootstrap key="tw" color="af5048" size={24} />,
    ],
    links: {
      github: "https://github.com/alexpadev/jmaps",
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
      github: "https://github.com/alexpadev/wannapop",
      demo: "https://todo-mern-app.netlify.app",
    },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-neutral-900 mt-25 text-neutral-100 py-16 px-50"
    >
      <h2 className="text-4xl font-bold text-center mb-18">My Projects</h2>

      <div className="max-w-7xl mx-auto">
        <ScrollFloat
          animationDuration={0.6}
          ease="power3.out"
          scrollStart="center bottom"
          scrollEnd="bottom top"
          stagger={0.02}
        >
        </ScrollFloat>

        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ScrollFloat
              key={project.title}
              animationDuration={0.5}
              ease="back.inOut(2)"
              scrollStart="center bottom"
              scrollEnd="bottom top"
              stagger={0.03}
            >
              <div className="border border-neutral-700 rounded-lg p-6 flex flex-col justify-between h-full hover:shadow-lg transition-shadow ">
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
                      <span className="font-medium ml-1">Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-neutral-300 transition"
                    >
                      <MdInsertLink size={24} />
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
