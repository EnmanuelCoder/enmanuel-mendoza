import React from "react";
import { NavLink } from "react-router-dom";

const PostBlog = ({ img, area, title, page }) => {
  return (
    <article className="w-full md:w-[80%] h-42 bg- bg-primary flex flex-col p-5 text-white font-Montserrat sm:flex-row">
      <NavLink to={page} className="w-full sm:w-[40%] h-42	">
        <img src={img} className="w-full h-full object-cover" />
      </NavLink>
      <div className="w-full h-full p-2 sm:flex sm:flex-col sm:justify-around md:pl-5">
        <h2 className="text-xl font-thin md:text-2xl py-3">{area}</h2>
        <NavLink to={page} className="">
          <h3 className="text-xl md:text-4xl hover:underline ">{title}</h3>
        </NavLink>
        <p className="text-md font-normal md:text-xl py-3">Enmanuel Mendoza</p>
      </div>
    </article>
  );
};

export default PostBlog;
