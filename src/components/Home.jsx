import SplitText from "./SplitText";
import "ldrs/trio";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="flex flex-col bg-neutral-900">
      <div className="flex-shrink-0 w-full h-screen flex">
        <div className="w-6/7 flex flex-col items-end justify-center pr-8">
          <SplitText
            text="Alejandro"
            className="text-[150px] leading-none font-bold text-neutral-200 text-right block"
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
            className="text-[115px] leading-none font-bold text-neutral-200 text-right block"
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
            text="Full‑stack developer"
            className="text-[30px] leading-none font-bold text-[#af5048] text-right block mt-6"
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

        <div className="w-1/2 flex items-center justify-start ml-10">
          <l-trio size="150" speed="4.0" color="#af5048" />
        </div>
      </div>

      <div className="flex-grow">
        <About />
        <Projects />
        <Stack />
      </div>
    </div>
  );
}

export default Home;
