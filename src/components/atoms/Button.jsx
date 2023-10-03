import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="w-full py-5 bg-black text-white">
      {children}
    </div>
  );
};

export default Button;
