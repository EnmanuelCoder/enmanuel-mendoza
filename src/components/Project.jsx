import React from "react";
import { Link } from "react-router-dom";

const Project = ({ name, img, routeDetail, routeCode, routeDemo }) => {
  return (
    <article className="space-y-2 rounded-xl shadow-lg border-4 border-secondary relative">
      <figure className="rounded-lg ">
        <img
          src={img}
          alt="My project"
          className="w-full rounded-lg object-contain rounde h-full "
        />
      </figure>

      <div className="p-3 text-white">
        <h3 className="text-xl text-center pb-5">{name}</h3>
        <div className="w-full flex flex-col gap-4 justify-around">
          <Link
            to={routeDetail}
            className="py-2 md:py-3  bg-secondary rounded-lg text-center md:text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-60 duration-300"
          >
            Details
          </Link>
          <a
            href={routeCode}
            className="py-2 md:py-3 text-center bg-secondary rounded-lg md:text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-60 duration-300"
            target="_blank"
          >
            Code
          </a>
          <a
            href={routeDemo}
            className="py-2 md:py-3 bg-secondary text-center rounded-lg md:text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-60 duration-300"
            target="_blank"
          >
            Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
