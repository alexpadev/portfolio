import ScrollFloat from "./ScrollFloat";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiPython,
  SiFlask,
  SiReact,
  SiMongodb,
  SiMysql,
  SiMariadb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiXml,
  SiGit,
  SiGnubash,
  SiVirtualbox,
} from "react-icons/si";
import { BsCircleFill, BsCircle } from "react-icons/bs";
import {
  VscCodeReview,
  VscDatabase,
  VscExtensions,
  VscBeaker
} from "react-icons/vsc";

const sections = [
  {
    Icon: VscCodeReview,
    title: "Programming Languages",
    items: [
      { Icon: SiJavascript, name: "JavaScript", level: 3 },
      { Icon: SiPhp,        name: "PHP",        level: 1 },
      { Icon: SiPython,     name: "Python",     level: 2 },
      { Icon: SiHtml5,      name: "HTML",       level: 3 },
      { Icon: SiCss3,       name: "CSS",        level: 3 },
      { Icon: SiXml,        name: "XML",        level: 2 },
      { Icon: SiGnubash,    name: "Bash",       level: 2 },
    ],
  },
  {
    Icon: VscExtensions,
    title: "Frameworks",
    items: [
      { Icon: SiNodedotjs, name: "Node.js",   level: 3 },
      { Icon: SiExpress,   name: "Express",   level: 3 },
      { Icon: SiLaravel,   name: "Laravel",   level: 1 },
      { Icon: SiFlask,     name: "Flask",     level: 2 },
      { Icon: SiReact,     name: "React",     level: 2 },
      { Icon: SiBootstrap, name: "Bootstrap", level: 2 },
      { Icon: SiTailwindcss, name: "Tailwind CSS", level: 3 },
    ],
  },
  {
    Icon: VscDatabase,
    title: "Databases",
    items: [
      { Icon: SiMongodb,    name: "MongoDB",    level: 2 },
      { Icon: SiMysql,      name: "MySQL",      level: 2 },
      { Icon: SiMariadb,    name: "MariaDB",    level: 2 },
      { Icon: SiPostgresql, name: "PostgreSQL", level: 2 },
    ],
  },
  {
    Icon: VscBeaker,
    title: "Others",
    items: [
      { Icon: VscCodeReview, name: "VS Code",    level: 3 },
      { Icon: SiVirtualbox, name: "VirtualBox", level: 2 },
      { Icon: SiGit,        name: "Git",        level: 3 },
    ],
  },
];

const renderLevel = (n) => (
  <div className="flex space-x-1 mt-1">
    {[1, 2, 3].map(i =>
      i <= n
        ? <BsCircleFill key={i} className="text-[#af5048]" size={10} />
        : <BsCircle key={i} className="text-neutral-600" size={10} />
    )}
  </div>
);

const Stack = () => {
  return (
    <div className="w-full mt-30 bg-neutral-900 min-h-screen py-12 text-neutral-100">
      <h2 className="text-4xl font-bold text-center mb-18">Stack</h2>

      <div className="max-w-5xl mx-auto px-4">
        {sections.map(({ Icon: SectionIcon, title, items }) => (
          <ScrollFloat
            key={title}
            animationDuration={0.5}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="center top"
            stagger={0.03}
          >
            <section className="mb-12">
              <header className="flex items-center mb-4 border-b-2 border-neutral-600 pb-2 space-x-2">
                <SectionIcon size={28} className="text-[#af5048] mb-1" />
                <h2 className="text-3xl font-semibold text-white mb-2">
                  {title}
                </h2>
              </header>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-7">
                {items.map(({ Icon, name, level }) => (
                  <div key={name} className="flex flex-col items-center text-white">
                    <Icon size={40} className="mb-2" />
                    <span className="mt-1">{name}</span>
                    {renderLevel(level)}
                  </div>
                ))}
              </div>
            </section>
          </ScrollFloat>
        ))}
      </div>
    </div>
  );
};

export default Stack;
