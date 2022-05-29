import React from "react";
import { InputPropInterface, TextAreaPropInterface } from "../../interfaces";
import PropType from "prop-types";

export const Input: React.FC<InputPropInterface> = ({
  type,
  className,
  onChange,
  name,
  value,
  label,
  placeholder,
}) => {
  return (
    <div className="form-group">
      {label ? <label>{label}</label> : ""}
      <input
        type={type || "text"}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`form-control ${className ? className : ""}`}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropType.string,
  className: PropType.string,
  onChange: PropType.func.isRequired,
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  label: PropType.string,
  placeholder: PropType.string.isRequired,
};

export const TextArea: React.FC<TextAreaPropInterface> = ({
  label,
  name,
  placeholder,
  className,
  cols,
  onChange,
  value,
}) => {
  return (
    <div className="form-group">
      {label ? <label>{label}</label> : ""}
      <textarea
        name={name}
        value={value}
        cols={cols || 3}
        placeholder={placeholder}
        className={`form-control ${className ? className : ""}`}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  cols: PropType.number,
  className: PropType.string,
  onChange: PropType.func.isRequired,
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  label: PropType.string,
  placeholder: PropType.string.isRequired,
};
