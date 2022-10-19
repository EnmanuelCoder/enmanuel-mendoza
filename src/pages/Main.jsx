import React from "react";
import About from "../containers/About";
import Aptitudes from "../containers/Aptitudes";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import Home from "../containers/Home";
import Portafolio from "../containers/Portafolio";

const Main = () => {
  return (
    <>
      <Header />
      <main className=" bg-primary font-Montserrat w-full h-full">
        <Home />
        <About />
        <Aptitudes />
        <Portafolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
