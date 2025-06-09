import ScrollFloat from "./ScrollFloat";
import { HiOutlineUserCircle, HiOutlineBriefcase, HiOutlinePencil } from 'react-icons/hi2';

const sections = [
  {
    Icon: HiOutlineUserCircle,
    title: "About me",
    content: (
      <div className="text-2xl leading-relaxed">
        I’m <strong>Alejandro Peláez</strong>, a full‑stack developer based in Barcelona, Spain. I hold a Higher Degree in Web Development from IES Joaquim Mir, where I worked on numerous projects. I specialize in:
        <ul className="list-disc pl-5 mt-3 mb-3">
          <li className="ml-10"><strong>Node.js</strong> & Express for backend APIs</li>
          <li className="ml-10"><strong>React</strong> for dynamic, responsive frontends</li>
          <li className="ml-10">Full‑stack integrations, MongoDB/SQL, and REST</li>
        </ul>
        I'm committed to designing web pages with a clean and modern aesthetic that aligns with contemporary UI/UX standards. I’m currently improving my Node.js and React skills so I can build more consistent, diverse and complex code.
      </div>
    ),
  },
  {
    Icon: HiOutlineBriefcase,
    title: "Work Experience",
    content: (
      <ul className="list-disc list-inside space-y-3 text-xl">
      
          <strong>Web developer</strong> at <em>Catalunya Refer</em>{" "}
          <span className="text-gray-300 text-sm">(November 2024 – March 2025)</span>
          <p className="text-sm text-neutral-300">
            Development of a language course web application for Academia Oasis in Sitges. Usage of JavaScript, HTML5 and CSS.
          </p>
    
      </ul>
    ),
  },
  {
    Icon: HiOutlinePencil,
    title: "Studies",
    content: (
      <ul className="list-disc list-inside space-y-3 text-xl">
       
          <strong>Web development higher degree</strong>{" "}
          <span className="text-gray-300 text-sm">(finished)</span>
          <p className="text-sm text-neutral-300">
            IES Joaquim Mir (September 2023 – May 2025)
          </p>
        
     
          <strong>Management and Public Administration</strong>{" "}
          <span className="text-gray-300 text-sm">(not finished)</span>
          <p className="text-sm text-neutral-200">
            University of Barcelona (September 2021 – May 2023)
          </p>
      
          <strong>High School</strong>{" "}
          <span className="text-gray-300 text-sm">(finished)</span>
          <p className="text-sm text-neutral-300">
            IES Dolors Mallafré (September 2019 – June 2021)
          </p>
      
      </ul>
    ),
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen mt-30 bg-neutral-900 flex items-start justify-center py-8 overflow-auto">
      <div className="text-white w-3/4 max-w-5xl mb-12 px-4 pt-12">
        <ScrollFloat
          animationDuration={0.5}
          ease="back.inOut(2)"
          scrollStart="center bottom"
          scrollEnd="bottom top"
          stagger={0.03}
        >
          {sections.map(({ Icon, title, content }) => (
            <section key={title} className="mb-12">
              <header className="flex items-center mb-4 border-b-2 border-neutral-600 pb-2 space-x-2">
                <Icon size={28} className="text-[#af5048]" />
                <h2 className="text-3xl font-semibold text-white">
                  {title}
                </h2>
              </header>
              {content}
            </section>
          ))}
        </ScrollFloat>
      </div>
    </div>
  );
};

export default About;
