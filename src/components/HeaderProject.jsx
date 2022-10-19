import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../assets/icons/arrowLeft.svg";

const HeaderProject = ({ page }) => {
  return (
    <header className="w-full bg-primary font-Montserrat flex justify-between text-white h-20 items-center px-7 fixed shadow-xl z-20">
      <Link to={page}>
        <img src={arrowLeft} alt="Icon arrow" className="cursor-pointer" />
      </Link>
      <h1 className="text-3xl font-bold">
        E<span className="text-logo">M</span>
      </h1>
    </header>
  );
};

export default HeaderProject;
