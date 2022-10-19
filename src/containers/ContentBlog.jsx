import React from "react";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/linkedin.svg";
import linkedin from "../assets/icons/twiter.svg";

const ContentBlog = ({ children }) => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row pt-10">
      <div className="w-36 h-auto">
        <div className="sticky top-24 flex flex-row py-5 md:flex-col items-center gap-3">
          <a
            href="#"
            className="p-2 rounded-full border-2 border-colors-white "
          >
            <img src={instagram} alt="icons social media" className="w-8" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border-2 border-colors-white "
          >
            <img src={facebook} alt="icons social media" className="w-8" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border-2 border-colors-white "
          >
            <img src={linkedin} alt="icons social media" className="w-8" />
          </a>
        </div>
      </div>
      <section className="w-full h-auto space-y-5">{children}</section>
    </section>
  );
};

export default ContentBlog;
