import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;