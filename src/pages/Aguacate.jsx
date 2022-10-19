import React from "react";
import DetailProject from "../components/DetailProject";
import HeaderProject from "../components/HeaderProject";
import Footer from "../containers/Footer";
import { dataProjects } from "../data/dataProjects";

const Aguacate = () => {
  return (
    <>
      <HeaderProject 
        page="/"
      />
      {dataProjects.map((item, index) => {
        if(item.name === "Aguacate") {
          return (
            <div key={index}>
              <DetailProject
                img={item.image}
                name={item.name}
                text={item.description}
                routeCode={item.routeCode}
                routeDemo={item.routeDemo}
              />
            </div>
          )
        }
      })}
      <Footer />
    </>
  );
};

export default Aguacate;
