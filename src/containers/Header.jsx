import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-primary font-Montserrat text-white h-20 flex w-full justify-between items-center px-7">
      <h1 className="text-2xl font-bold">
        E<span className="text-secondary">M</span>
      </h1>
      <nav className="space-x-5 text-md">
        <Link
          className="hover:text-secondary duration-300 ease-in-out cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Home
        </Link>
        <Link
          className="hover:text-secondary duration-300 ease-in-out cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          About me
        </Link>
        <Link
          className="hover:text-secondary duration-300 ease-in-out cursor-pointer"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Skills
        </Link>
        <Link
          className="hover:text-secondary duration-300 ease-in-out cursor-pointer"
          to="portafolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Portafolio
        </Link>
        <Link
          className="hover:text-secondary duration-300 ease-in-out cursor-pointer"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Contact
        </Link>
        <a href="blog" className="hover:text-secondary duration-300 ease-in-out cursor-pointer">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;
