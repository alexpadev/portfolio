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

const Stack = () => {
    return(
        <div className="w-full bg-neutral-900 min-h-screen p-50">
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
    )
}

export default Stack;
 