import React from "react";
import { Button, Input } from 'semantic-ui-react'


const LoginForm = props => {
  return (
    <form>
      <div>
        <Input
          placeholder='Email'
          id="email"
          onChange={props.inputChangeHandler} />
      </div>

      <div>
        <Input
          placeholder='Password'
          id="password" 
          onChange={props.inputChangeHandler} />
      </div>
      <Button
        primary
        onClick={e => props.loginHandler(e)}
        id="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
