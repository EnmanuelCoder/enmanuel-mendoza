import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/icons/error.svg";
import Button from "../components/Button";
import Footer from "../containers/Footer";

const NotFound = () => {
  return (
    <>
      <main className="w-conatiner h-auto text-white space-y-5 px-4">
        <h1>Error 4040</h1>
        <div className="flex flex-col justify-center items-center">
          <figure className="w-full md:w-1/2 h-[70%]">
            <img src={error} alt="error page" className="w-full h-full" />
          </figure>
          <div className="flex flex-col justify-center gap-5 pt-5">
            <h3 className="text-xl">
              Sorry, there was an error, please try again later.
            </h3>
            <Link
              to="/enmanuel-mendoza"
              className='w-auto bg-secondary text-white text-center p-3 rounded-full shadow-lg font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"'
            >
              Turn back
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
