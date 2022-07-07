import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className="px-2 py-2 rounded-lg text-sm font-semibold outline-none border-2 border-transparent transition-colors duration-300 focus:border-gray-800"
    />
  );
};

export default Input;
