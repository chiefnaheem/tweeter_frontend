import React from "react";
import { ButtonPropInterface } from "../../interfaces";
import { string, func, node, oneOf } from "prop-types"

const Button: React.FC<ButtonPropInterface> = ({ className, onClick, type, children }) => {
  return (
    <div className="form-group">
      <button
        type={type || "button"}
        onClick={onClick}
        className={`btn ${className ? className : ""}`}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
    className: string,
    onClick: func.isRequired,
    type: oneOf(["button", "submit", "reset"]),
    children: node,
}

export default Button;
