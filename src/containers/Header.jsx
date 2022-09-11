import React from "react";

const Header = () => {
  return (
    <header className="text-white h-20 flex container mx-auto justify-between items-center">
      <h1 className="text-2xl font-bold">E<span className="text-secondary">M</span></h1>
      <nav className="space-x-5 text-md">
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">Home</a>
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">About me</a>
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">Technologies</a>
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">Portafolio</a>
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">Contact</a>
        <a href="#" className="hover:text-secondary duration-300 ease-in-out">Blog</a>
      </nav>
    </header>
  );
};

export default Header;
