import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Header = () => {
  return (
    <header className="fixed top-4 right-1 flex space-x-6 z-20 py-4 px-30">
      {/* <Link
        to="/"
        className="border-3 border-neutral-100 rounded-full px-4 py-2 text-neutral-100 font-semibold text-xl hover:text-black hover:bg-neutral-100 transition cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="border-3 border-neutral-100 rounded-full px-4 py-2 text-neutral-100 font-semibold text-xl hover:text-black hover:bg-neutral-100 transition cursor-pointer"
      >
        About me
      </Link>
      <Link
        to="/stack"
        className="border-3 border-neutral-100 rounded-full px-4 py-2 text-neutral-100 font-semibold text-xl hover:text-black hover:bg-neutral-100 transition cursor-pointer"
      >
        Stack
      </Link>
      <Link
        to="/projects"
        className="border-3 border-neutral-100 rounded-full px-4 py-2 text-neutral-100 font-semibold text-xl hover:text-black hover:bg-neutral-100 transition cursor-pointer"
      >
        Projects
      </Link> */}

      <a
        href="https://www.linkedin.com/in/alejandro-pelaez-almoguera-500b042b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin
          className="text-blue-500 hover:text-blue-600 transition"
          size={50}
        />
      </a>
      <a
        href="https://github.com/alexpadev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub
          className="text-neutral-100 hover:text-neutral-200 transition"
          size={50}
        />
      </a>
    </header>
  );
}

export default Header;
