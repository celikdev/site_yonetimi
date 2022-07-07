import React from "react";

const Button = (props) => {
  return (
    <button {...props} className="font-bold rounded-lg bg-red-400 w-1/2">
      {props.children}
    </button>
  );
};

export default Button;
