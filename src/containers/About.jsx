import React, { useState } from "react";
import Button from "../components/Button";
import perfil from "../assets/img/perfil.jpeg";

const About = () => {
  const [read, setRead] = useState(false);

  const toggleRead = () => {
    setRead(!read);
  };

  return (
    <section
      className="w-full h-4/6 flex flex-col md:flex-row items-center gap-10 bg-white text-primary"
      id="about"
    >
      <figure className="w-full md:w-1/2 h-[500px] ">
        <img
          src={perfil}
          alt="This is I am"
          className="w-full h-full object-cover "
        />
      </figure>
      <div className="container md:w-1/2 mx-auto space-y-4 p-5">
        <h2 className="text-4xl font-bold">About me</h2>
        <div className="w-20 border-2 border-secondary"></div>
        <p className="text-md">
          I am a web development student at Platzi and self-taught, I am
          passionate about working with web technologies and learning new
          things. I would be interested in entering the workplace, being able to
          contribute, work as a team and gain experience to grow professionally.
        </p>
        <span className={read ? "block" : "hidden"}>
          <p className="text-md">
            Also, in my free time I usually play the guitar and exchange
            languages on Duolingo, I love video games and watch movies and
            series.
          </p>
        </span>
        <Button action={toggleRead}>{read ? "Show less" : "Read more"}</Button>
      </div>
    </section>
  );
};

export default About;
