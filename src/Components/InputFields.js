import React from "react";
import { Input, Dropdown } from 'semantic-ui-react'


const InputFields = props => {
  return (
    <>
      {/* <label>Distance</label> */}
      <Input
        placeholder='Distance'
        id="distance"
        onChange={props.inputChangeHandler} />

      {/* <select id="gender" onChange={props.inputChangeHandler}>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select> */}

      <Dropdown
        // placeholder='Select Friend'
        defaultValue='female'
        selection
        onChange={(e, { value }) => props.inputGenderChangeHandler(value)}
        options={[{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]} />
      {/* <label>Age</label> */}
      <Input
        placeholder='Age'
        id="age"
        onChange={props.inputChangeHandler} />
    </>
  );
};

export default InputFields;
