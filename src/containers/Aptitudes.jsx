import React from "react";
import Technology from "../components/Skills";

const Aptitudes = () => {
  return (
    <section className="container flex flex-col items-center h-[500px] " id="skills">
      <h2 className="text-3xl text-white text-center py-10">Skills</h2>

      <article className="w-full h-96 space-y-5 rounded-lg py-9">
        <div className="w-full h-full grid grid-cols-3 grid-rows-3 grid-flow-col justify-center items-start">
          <Technology skills="HTML" level="Expert" />
          <Technology skills="CSS" level="Expert" />
          <Technology skills="JS" level="Expert" />
          <Technology skills="Tailwind" level="Expert" />
          <Technology skills="Node JS" level="Expert" />
          <Technology skills="Python" level="Expert" />
          <Technology skills="Git y GitHub" level="Expert" />
          <Technology skills="Excel" level="Expert" />
        </div>
      </article>
    </section>
  );
};

export default Aptitudes;
