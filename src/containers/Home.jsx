import React from "react";
import myPicture from "../assets/myPicture.jpeg";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center gap-10 text-white" id="home">
      <div className="w-1/2 space-y-4">
        <h2 className="text-4xl font-bold">I'm <span className="text-secondary">Enmanuel</span> Mendoza</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
        <Button>
          Download CV
        </Button>
      </div>
      <figure className="w-80 border-4 border-secondary ">
        <img src={myPicture} alt="This is I am" className="opacity-80" />
      </figure>
    </section>
  );
};

export default Home;
