import "./App.css";
import SplitText from "./components/SplitText";
import "ldrs/trio"; 
import ScrollFloat from "./components/ScrollFloat";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMysql,
  SiMongodb,
  SiPython,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />

      </Routes>

      <div className="fixed top-4 right-4 flex space-x-6 z-20 py-4 px-30">
        <Link
          to="/projects"
          className="border-3 border-neutral-100 rounded-full px-4 py-2 text-neutral-100 font-semibold text-xl hover:text-black hover:bg-neutral-100 transition cursor-pointer"
        >
          Projects
        </Link>
        <a
          href="https://www.linkedin.com/in/alejandro-pelaez-almoguera-500b042b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="text-blue-500 hover:text-blue-600 transition" size={50} />
        </a>
        <a
          href="https://github.com/alexpadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="text-neutral-100 hover:text-neutral-200 transition" size={50} />
        </a>
      </div>

      <div className="w-full h-full flex bg-neutral-900 min-h-screen">
        <div className="w-6/7 flex flex-col items-end justify-center space-y-0 pr-8">
          <SplitText
            text="Alejandro"
            className="text-[175px] leading-none font-bold text-neutral-200 text-right block"
            delay={75}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Pelaez"
            className="text-[125px] leading-none font-bold text-neutral-200 text-right block"
            delay={125}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Junior developer"
            className="text-[40px] leading-none font-bold text-[#af5048] text-right block mt-6"
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div className="w-1/2 flex items-center justify-start ml-20">
          <l-trio size="150" speed="4.0" color="#af5048"></l-trio>
        </div>
      </div>

      <div className="w-full bg-neutral-900 border-white flex items-center justify-center py-8">
        <div className="mb-50 text-white w-2/4">
          <ScrollFloat
            animationDuration={0.5}
            ease="back.inOut(2)"
            scrollStart="center bottom"
            scrollEnd="bottom top"
            stagger={0.03}
          >
            <div className="text-3xl leading-relaxed text-center">
              I'm a recently graduated developer who has worked in numerous types of
              projects. Working hard so I'll become a more defined programmer.
            </div>
          </ScrollFloat>
        </div>
      </div>

      <div className="w-full bg-neutral-900 -mt-150">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-400" size={60} />
            </div>
            <div className="flex flex-col items-center">
              <SiHtml5 className="text-orange-500" size={60} />
            </div>
            <div className="flex flex-col items-center">
              <SiCss3 className="text-blue-500" size={60} />
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-cyan-400" size={60} />
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-cyan-400" size={80} />
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-green-700" size={80} />
            </div>
            <div className="flex flex-col items-center">
              <SiPython className="text-yellow-400" size={65} />
            </div>
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
