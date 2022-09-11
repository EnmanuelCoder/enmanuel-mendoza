import React from 'react';
import check from "../assets/icons/check.svg";

const Skills = ({ skills, level }) => {
  return (
    <div className='flex justify-center items-center gap-5 text-white'>
      <figure>
        <img src={check} alt="Icon check" />
      </figure>
      <div className='w-60 border-b-2 border-secondary'>
        <h3>{skills}</h3>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default Skills;