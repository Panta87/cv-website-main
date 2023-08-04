import React from "react";
import { CgAsterisk } from "react-icons/cg";
import "./inputField.scss";

const InputField = ({
  name,
  value,
  valid,
  label,
  errorText,
  type = "text",
  mandatory,
  onChange,
  onBlur,
}) => {
  return (
    <div className="input-field">
      <label className={"label"}>
        <span className="input-text">{label}</span>
        {mandatory && (
          <span className="asterisk">
            <CgAsterisk />
          </span>
        )}
      </label>

      {type === "textArea" ? (
        <textarea
          className="text-area"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={4}
          cols={40}
        />
      ) : (
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      <div className={"error-text"}>{!valid && <span>{errorText}</span>}</div>
    </div>
  );
};

export default InputField;
