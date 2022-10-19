import React from "react";

const Button = ({ children, action }) => {
  return (
    <button className="w-auto bg-secondary text-white p-3 rounded-full shadow-lg font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
