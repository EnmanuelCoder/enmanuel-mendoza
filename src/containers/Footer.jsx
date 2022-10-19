import React from "react";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import twiter from "../assets/icons/twiter.svg";

const Footer = () => {
  return (
    <footer
      className="w-full h-auto bg-secondary text-white flex flex-col justify-center items-center text-center space-y-3 p-10"
      id="contact"
    >
      <h3 className="text-4xl font-bold">Enmanuel Mendoza</h3>
      <h4 className="text-2xl font-semibold">Frontend Developer</h4>
      <div>
        <h4 className="text-xl">
          If you would like to contact me, send me a message
        </h4>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/EnmanuelCoder" target="_blank">
          <img
            src={github}
            alt="icons social media"
            className="w-12 md:w-16 p-3 bg-primary rounded-full"
          />
        </a>
        <a href="https://twitter.com/EnmanuelCoder" target="_blank">
          <img
            src={twiter}
            alt="icons social media"
            className="w-12 md:w-16 p-3 bg-primary rounded-full"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/enmanuel-mendoza-89b24424b/"
          target="_blank"
        >
          <img
            src={linkedin}
            alt="icons social media"
            className="w-12 md:w-16 p-3 bg-primary rounded-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
