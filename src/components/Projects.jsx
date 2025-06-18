import ScrollFloat from "./ScrollFloat";
import { SiReact, SiTailwindcss, SiJavascript, SiMongodb, SiGithub, SiNodedotjs, SiExpress, SiPostgresql, SiPhp, SiLaravel, SiBootstrap, SiFilament, SiComposer, SiPostman, SiMariadb, SiEjs } from "react-icons/si";
import { MdInsertLink } from 'react-icons/md'

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "My online portfolio, made with React, TailwindCSS and deployed in GitHub Pages. In this project I experimented with GSAP animations for the frist time. Includes personal information, tech stack, projects and contact information.",
    techIcons: [
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />
    ],
    image: `${import.meta.env.BASE_URL}portfolio.png`,
    links: {
      github: "https://github.com/alexpadev/portfolio",
      demo:  "https://mi-portfolio.netlify.app"
    },
  },
  {
    title: "TrainR",
    description:
      "App where users can manage their own routines. Backend made with Node.js with Express, frontend made with React. Database based on PostgreSQL.",
    techIcons: [
      <SiJavascript key="js" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="express" color="af5048" size={24} />,
      <SiPostgresql key="postgres" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />
    ],
    image: `${import.meta.env.BASE_URL}trainR.png`,
    links: {
      github: "https://github.com/alexpadev/trainR",
      demo:  "https://trainr-ru6t.onrender.com/"
    },
  },
  {
    title: "Tactix",
    description:
      "Probably my most ambitious project so far. Tactix is an application where users can create or take part in sport events (such as football games or tournaments) alone or as a team. Among other features, there is team creation, game and tournament organization, group and individual chat made with websocket, a map where users can see nearby events, etc. Backend based on Node.js + Express, two databases with MongoDB and MariaDB. Frontend made with React.",
    techIcons: [
      <SiJavascript key="js" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="express" color="af5048" size={24} />,
      <SiEjs key="ejs" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiMariadb key="mariadb" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />
    ],
    image: `${import.meta.env.BASE_URL}tactix.png`,
    links: {
      github: "https://github.com/alexpadev/tactix"
    },
  },
  
  {
    title: "Chatter",
    description:
      "Real-time chatting app. Backend based on Node.js with Express y Frontend en React. BD en MongoDB, autenticación y chat grupal por websocket. AI chatbot con Gemini API.",
    techIcons: [
      <SiJavascript key="js" color="af5048" size={24} />,
      <SiNodedotjs key="node" color="af5048" size={24} />,
      <SiExpress key="express" color="af5048" size={24} />,
      <SiMongodb key="mongo" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiTailwindcss key="tw" color="af5048" size={24} />
    ],
    image: `${import.meta.env.BASE_URL}chatter.png`,
    links: {
      github: "https://github.com/alexpadev/chatter"
    },
  },
  {
    title: "jMaps",
    description:
      "App where users create places with questions and reviews; these are displayed on a map using React-Leaflet. Backend in Laravel, frontend in React.",
    techIcons: [
      <SiPhp key="php" color="af5048" size={24} />,
      <SiLaravel key="laravel" color="af5048" size={24} />,
      <SiFilament key="filament" color="af5048" size={38} />,
      <SiComposer key="composer" color="af5048" size={24} />,
      <SiPostman key="postman" color="af5048" size={24} />,
      <SiReact key="react" color="af5048" size={24} />,
      <SiBootstrap key="bootstrap" color="af5048" size={24} />
    ],
    image: `${import.meta.env.BASE_URL}jmaps.png`,
    links: {
      github: "https://github.com/alexpadev/jmaps"
    },
  },
  {
    title: "Wannapop",
    description:
      "Wallapop clone. Users can look for products published by sellers. Unable to work due to the API belonging to my old educational institution. Coded with vanilla Javascript and simple HTML templates.",
    techIcons: [
      <SiJavascript key="js" color="af5048" size={24} />,
      <SiBootstrap key="bootstrap" color="af5048" size={24} />

    ],
    image: `${import.meta.env.BASE_URL}wannapop.png`,
    links: {
      github: "https://github.com/alexpadev/wannapop"
    },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        w-full bg-neutral-900 mt-25 text-neutral-100 py-16
        px-4 sm:px-6 md:px-50
      "
    >
      <h2 className="text-4xl font-bold text-center mb-18">My Projects</h2>

      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            xl:grid-cols-2
            3xl:grid-cols-3
            gap-8
          "
        >
          {projectsData.map((project) => (
            <ScrollFloat
              key={project.title}
              animationDuration={0.5}
              ease="back.inOut(2)"
              scrollStart="center bottom"
              scrollEnd="bottom top"
              stagger={0.03}
            >
              <div className="border border-neutral-700 rounded-lg p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {project.techIcons.map((IconComp, i) => (
                      <div key={i} className="text-amber-400">
                        {IconComp}
                      </div>
                    ))}
                  </div>

                  <div className="border border-neutral-800 rounded-lg overflow-hidden mb-8 w-full">
                    <img
                      src={project.image}
                      alt={`Imagen del proyecto ${project.title}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="flex items-center space-x-4">
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
              </div>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
