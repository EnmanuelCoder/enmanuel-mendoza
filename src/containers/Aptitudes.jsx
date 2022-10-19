import React from "react";
import Technology from "../components/Skills";

const Aptitudes = () => {
  return (
    <section
      className="container mx-auto flex flex-col items-center h-auto p-4 "
      id="skills"
    >
      <h2 className="text-3xl text-white font-bold py-10">My current skills</h2>

      <article className="w-full h-auto space-y-5 rounded-lg pt-9">
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-5 justify-center items-start">
          <Technology skills="HTML" level="Expert" />
          <Technology skills="CSS" level="High" />
          <Technology skills="JS" level="Medium" />
          <Technology skills="Tailwind" level="High" />
          <Technology skills="Node JS" level="Medium" />
          <Technology skills="Git y GitHub" level="High" />
        </div>
      </article>
      <article className="w-full h-auto space-y-5 rounded-lg pt-9">
        <h2 className="text-3xl text-white font-bold py-10 text-center">
          I am interested in learning:
        </h2>

        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-3 gap-5 justify-center items-start">
          <Technology skills="Next JS" />
          <Technology skills="Express.js" />
          <Technology skills="PostgreSQL" />
        </div>
      </article>
    </section>
  );
};

export default Aptitudes;
