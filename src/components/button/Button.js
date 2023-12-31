import React from "react";
import "./button.scss";

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      className={`button ${disabled ? "button-disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
