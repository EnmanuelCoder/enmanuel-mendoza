import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-40 bg-secondary text-primary p-3 rounded-full shadow-lg font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
      {children}
    </button>
  );
};

export default Button;
