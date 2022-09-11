import React from "react";
import About from "../containers/About";
import Aptitudes from "../containers/Aptitudes";
import Header from "../containers/Header";
import Home from "../containers/Home";

const Main = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Home />
        <About />
        <Aptitudes />
      </main>
    </>
  );
};

export default Main;
