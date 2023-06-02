import React from "react";

function InputTextBox(props) {
  const { onChange, label, ...inputProps } = props;
  //console.log(props);

  return (
    <>
      <div className="formInput">
        <br />
        <label>{label}</label>
        <br />
        <input {...inputProps} onChange={onChange} />
      </div>
    </>
  );
}

export default InputTextBox;
