import React from "react";
import "./style.css";

function RadioButton(props) {
  const { options, label, onChange, ...inputRadioProps } = props;

  return (
    <>
      <br />
      <label>{label}</label>
      <br />
      {options.map((optionValues) => {
        const { option } = optionValues;
        return (
          <>
            <input
              {...inputRadioProps}
              type="radio"
              value={option}
              onChange={onChange}
            />
            <label>{option}</label>
          </>
        );
      })}
    </>
  );
}

export default RadioButton;
