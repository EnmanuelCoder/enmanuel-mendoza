import React from "react";

const DetailProject = ({ img, name, text, routeCode, routeDemo }) => {
  return (
    <main className="w-full h-auto md:h-screen flex items-center pt-32 md:pt-24 pb-20 md:py-0 p-5">
      <section className="w-full md:container m-auto flex flex-col items-center gap-8 md:flex-row text-white">
        <figure className="w-full h-72 md:w-1/2 md:h-96">
          <img
            src={img}
            alt="projects"
            className="w-full h-full object-cover rounded-lg"
          />
        </figure>
        <div className="w-full md:w-1/2 space-y-5">
          <h2 className="text-4xl md:text-6xl font-bold">{name}</h2>
          <p className="text-md md:text-lg">{text}</p>
          <div className="flex gap-5">
            <a
              href={routeCode}
              className="py-2 px-5 md:py-3 bg-secondary rounded-lg md:text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-60 duration-300 cursor-pointer"
              target="_blank"
            >
              Code
            </a>
            <a
              href={routeDemo}
              className="py-2 px-5 md:py-3 bg-secondary text-center rounded-lg md:text-xl font-bold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-60 duration-300 cursor-pointer"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailProject;
