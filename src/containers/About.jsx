import React from 'react';
import Button from '../components/Button';
import perfil from "../assets/perfil.jpeg";

const About = () => {
  return (
    <section className='w-full h-4/6 flex items-center gap-10 bg-white text-primary '>
      <figure className='w-1/2 h-[500px] '>
        <img src={perfil} alt='My picture' className='w-full h-full object-cover '/>
      </figure>
      <div className='w-1/2 space-y-4 pr-10'>
        <h2 className="text-4xl font-bold">About me</h2>
        <div className='w-20 border-2 border-secondary'></div>
        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
        <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur eum officiis dolore fugit assumenda sequi minima totam quaerat inventore praesentium, repellat reiciendis vitae officia culpa nobis quia vero quae?</p>
        <Button>Read more</Button>
      </div>
    </section>
  );
};

export default About;