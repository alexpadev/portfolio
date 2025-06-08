import ScrollFloat from "./ScrollFloat";


const About = () => {
    return(
  <div className="w-full min-h-screen bg-neutral-900 border-white flex items-center justify-center py-8">
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
    )
}

export default About;
 