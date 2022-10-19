import React, { useState } from "react";
import { Link } from "react-scroll";
import menuMobile from "../assets/icons/menu.svg"
import closeMobile from "../assets/icons/close.svg"


const Header = () => {
  const styleMenuDefault = "hidden md:flex md:p-5 md:space-x-5 text-md";
  const styleMenuMobile = "absolute bg-primary w-full md:w-auto left-0 top-20 flex flex-col space-y-3 p-5 md:flex-row md:space-y-0 md:space-x-5 md:static text-md shadow-xl";
  const styleMenuDesktop = "absolute left-[-1000px] md:left-0 md:w-auto top-20 flex flex-col space-y-3 p-5 md:flex-row md:space-y-0 md:space-x-5 md:static text-md";
  const [menu, setMenu] = useState(menuMobile)
  const [estilos, setEstilos] = useState(styleMenuDefault)

  const ToggleMenu = () => {
    if (menu === menuMobile) {
      setMenu(closeMobile)
      setEstilos(styleMenuMobile)
      
    } 
    else {
      setMenu(menuMobile);
      setEstilos(styleMenuDesktop);
      
    }  
  }

  return (
    <header className="w-full bg-primary font-Montserrat flex justify-between text-white h-20 items-center px-7 fixed shadow-xl z-20">
      <h1 className="text-3xl font-bold">
        E<span className="text-logo">M</span> 
      </h1>
      <figure>
        <img src={menu} onClick={ToggleMenu} alt="Icon menu" className="md:hidden" />
      </figure>
      <nav className={estilos}>
        <Link
          className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Home
        </Link>
        <Link
          className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          About me
        </Link>
        <Link
          className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Skills
        </Link>
        <Link
          className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer"
          to="portafolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Portfolio
        </Link>
        <Link
          className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          Contact
        </Link>
        {/* <NavLink to="/blog-personal" className="active:border-b-2 active:border-logo hover:text-logo duration-300 ease-in-out cursor-pointer">
          Blog
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Header;
