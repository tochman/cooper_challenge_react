import React from "react";
import { Input, Dropdown, Grid } from 'semantic-ui-react'


const InputFields = props => {
  return (
    <>
      <Grid columns={3} doubling stackable>
        <Grid.Column>
          <Input
            fluid
            placeholder='Distance'
            id="distance"
            onChange={props.inputChangeHandler} />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            fluid
            defaultValue='female'
            selection
            onChange={(e, { value }) => props.inputGenderChangeHandler(value)}
            options={[{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]} />
        </Grid.Column>
        <Grid.Column>
          <Input
            fluid
            placeholder='Age'
            id="age"
            onChange={props.inputChangeHandler} />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default InputFields;
