import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full flex justify-center md:justify-end space-x-6 z-20 py-7 px-17">
      <a
        href="https://drive.google.com/file/d/1d6v3dV0Ipj2qTWAtCnM51Lj-6rF0zhxA/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-100 hover:text-neutral-200 transition text-3xl flex items-center font-bold"
      >
        CV
      </a>
      <a
        href="https://www.linkedin.com/in/alejandro-pelaez-almoguera-500b042b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin
          className="text-blue-500 hover:text-blue-600 transition"
          size={37}
        />
      </a>
      <a
        href="https://github.com/alexpadev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub
          className="text-neutral-100 hover:text-neutral-200 transition"
          size={40}
        />
      </a>
      {/* <a href="mailto:alexpa200316@gmail.com">
        <MdEmail
          className="text-neutral-100 hover:text-neutral-200 transition"
          size={45}
        />
      </a> */}
    </header>
  );
};

export default Header;
