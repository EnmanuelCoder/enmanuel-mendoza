import React from "react";
import Button from "../components/Button";
import github from "../assets/icons/github.svg";
import twiter from "../assets/icons/twiter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import myPicture from "../assets/img/myPicture.jpeg";

const Home = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-around pb-10 md:py-0 text-white gap-3"
      id="home"
    >
      <div className=" w-auto h-full pt-32 justify-center flex flex-col md:items-start ml-5 space-y-4 gap-5 ">
        <h2 className="text-4xl md:text-5xl font-bold">
          I'm <span className="text-logo">Enmanuel</span> Mendoza,
          <br />
          I'm frontend <span className="text-logo">developer</span>
        </h2>
        <div className=" flex gap-6">
          <a href="https://github.com/EnmanuelCoder" target="_blank">
            <img
              src={github}
              alt="icons social media"
              className="p-4 bg-secondary rounded-full"
            />
          </a>
          <a href="https://twitter.com/EnmanuelCoder" target="_blank">
            <img
              src={twiter}
              alt="icons social media"
              className="p-4 bg-secondary rounded-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/enmanuel-mendoza-89b24424b/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="icons social media"
              className="p-4 bg-secondary rounded-full"
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1D780DJqhRR0o41fRPqJtJHshmVyu-cV5/view?usp=sharing"
          target="_blank"
        >
          <Button>Download CV</Button>
        </a>
      </div>
      <figure className="w-[25rem] h-[25rem] mt-28 mr-5 hidden md:block border-2 border-logo rounded-xl p-3">
        <img
          src={myPicture}
          alt="It's me"
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
    </section>
  );
};

export default Home;
