import SplitText from "./SplitText";
import "ldrs/trio";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";

function Home() {
 

  return (
    <div className="flex flex-col bg-neutral-900">
      <div className="flex flex-col md:flex-row flex-shrink-0 w-full h-screen">
        <div
          className="
            w-full md:w-6/7
            flex flex-col items-center md:items-end justify-center
            px-4 sm:px-6 md:pr-8
            mt-38 md:mt-[-200px]
            
          "
        >
          <SplitText
            text="Alejandro"
            className="
              text-[60px] sm:text-[100px] md:text-[150px]
              leading-snug font-bold text-neutral-200
              text-center md:text-right block
            "
            delay={75}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
          />

          <SplitText
            text="Pelaez"
            className="
              text-[50px] sm:text-[90px] md:text-[115px]
              leading-none font-bold text-neutral-200
              text-center md:text-right block
            "
            delay={125}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
          />

          <SplitText
            text="Full‑stack developer"
            className="
              text-[16px] sm:text-[24px] md:text-[30px]
              leading-none font-bold text-[#af5048]
              text-center md:text-right block mt-4 sm:mt-6
            "
            delay={20}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
          />
        </div>

        <div
          className="
            w-full md:w-1/2
            flex items-center justify-center md:justify-start
             md:mt-0
            px-4 sm:px-6 md:ml-10
          "
        >
          <l-trio
            size="150"
            speed="4.0"
            color="#af5048"
            class="transform scale-30 md:scale-100 origin-center md:mt-[-200px] mt-[-30px]"
          />
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
