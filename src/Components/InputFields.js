import React from "react";

const InputFields = props => {
  return (
    <>
      <label>Distance</label>
      <input id="distance" onChange={props.inputChangeHandler} />

      <select id="gender" onChange={props.inputChangeHandler}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

      <label>Age</label>
      <input id="age" onChange={props.inputChangeHandler} />
    </>
  );
};

export default InputFields;
