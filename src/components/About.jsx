import ScrollFloat from "./ScrollFloat";

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
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
              About me
            </h2>
          <div className="text-2xl leading-relaxed">
            My name is <strong className="text-[#af5048]">Alejandro Pelaez</strong>. 
            I am a programmer from Barcelona, Spain. I recently graduated from a web development higher degree, 
            where I worked on numerous types of projects. I have developed both backend and frontend, plus fullstack
            applications as well. Specialized in projects involving <strong className="text-yellow-400">Node.js</strong> with Express in the 
            backend and <strong className="text-blue-400">React</strong> for frontend. 
            Working hard so I'll become a more defined programmer.
          </div>

       

          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
              Work Experience
            </h2>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <div>
                <strong>Web developer</strong> at <em>Catalunya Refer</em> <span className="text-gray-300 text-sm">(November 2024 – March 2025)</span>
                <p className="text-sm text-neutral-300">
                  Development of a language course web application for Academia Oasis in Sitges. Usage of Javascript, HTML5 and CSS.
                </p>
              </div>
             
            </ul>
          </section>

          <section className="mt-12 mb-8">
            <h2 className="text-3xl font-semibold mb-4 border-b-2 border-neutral-600 pb-2">
              Studies
            </h2>
            <ul className="list-disc list-inside space-y-3 text-xl">
              <div>
                <strong>Web development higher degree</strong> <span className="text-gray-300 text-sm">(finished)</span>
                <p className="text-sm text-neutral-300">
                  IES Joaquim Mir (September 2023 – May 2025)
                </p>
              </div>
              <div>
                <strong>Management and Public Administration</strong> <span className="text-gray-300 text-sm">(not finished)</span>
                <p className="text-sm text-neutral-200">
                  University of Barcelona (September 2021 – May 2023)
                </p>
              </div>
              <div>
                <strong>High School</strong> <span className="text-gray-300 text-sm">(finished)</span>
                <p className="text-sm text-neutral-300">
                  IES Dolors Mallafré (September 2019 – June 2021)
                </p>
              </div>
            </ul>
          </section>
        </ScrollFloat>
      </div>
    </div>
  );
}

export default About;
