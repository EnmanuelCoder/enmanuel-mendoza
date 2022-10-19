import React from 'react';
import DetailProject from '../components/DetailProject';
import Footer from '../containers/Footer';
import HeaderProject from '../components/HeaderProject';
import { dataProjects } from '../data/dataProjects';


const Batatabit = () => {
  return (
    <>
      <HeaderProject 
        page="/"
      />
      {dataProjects.map((item, index) => {
        if(item.name === "Batatabit") {
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

export default Batatabit;