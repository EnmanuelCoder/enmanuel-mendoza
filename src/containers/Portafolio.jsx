import React, { useState } from "react";
import Project from "../components/Project";
import { dataProjects } from "../data/dataProjects";
import Button from "../components/Button";

const Portafolio = () => {
  const [moreProjects, setMoreProjects] = useState(false);

  const toggleProjects = () => {
    setMoreProjects(!moreProjects);
  };

  return (
    <section className="container h-auto mx-auto py-20" id="portafolio">
      <div className="w-full flex flex-col md:flex-row gap-5 justify-between items-center p-2">
        <h2 className="text-4xl font-bold text-white">Portfolio</h2>
        <Button action={toggleProjects}>
          {moreProjects ? "Show less" : "Show all the projects"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-4 gap-5 p-2 ">
        {dataProjects.map((item, index) => {
          if(item.id <= 3) {
            return (
              <div key={index}>
                <Project
                  name={item.name}
                  img={item.image}
                  routeDetail={item.routeDetail}
                  routeCode={item.routeCode}
                  routeDemo={item.routeDemo}
                />
              </div>
            )
          }
        })}
      </div>
      <div
        className={
          moreProjects
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-4 gap-5 p-2"
            : "hidden"
        }
      >
        {dataProjects.map((item, index) => {
          if(item.id > 3) {
            return (
              <div key={index}>
                <Project
                  name={item.name}
                  img={item.image}
                  routeDetail={item.routeDetail}
                  routeCode={item.routeCode}
                  routeDemo={item.routeDemo}
                />
              </div>
            )
          }
        })}
      </div>
    </section>
  );
};

export default Portafolio;
