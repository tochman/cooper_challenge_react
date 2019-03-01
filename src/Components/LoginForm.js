import React from "react";

const LoginForm = props => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input id="email" onChange={props.inputChangeHandler} />
      </div>

      <div>
        <label>Password</label>
        <input id="password" onChange={props.inputChangeHandler} />
      </div>
      <button onClick={e => props.loginHandler(e)} id="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
