import React from 'react';
import HeaderProject from '../components/HeaderProject';
import DetailProject from '../components/DetailProject';
import Footer from '../containers/Footer';
import { dataProjects } from '../data/dataProjects';

const Calculadora = () => {
  return (
    <>
      <HeaderProject 
        page="/enmanuel-mendoza"
      />
     {dataProjects.map((item, index) => {
        if(item.name === "Calculadora") {
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

export default Calculadora;