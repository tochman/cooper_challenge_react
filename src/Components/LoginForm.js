import React from "react";
// import { Button, Input } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


const LoginForm = props => {
  return (
    <div id='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid 
      textAlign='center' 
      style={{ height: '100%' }} 
      verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
        </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid icon='user'
                iconPosition='left'
                placeholder='E-mail address'
                id="email"
                onChange={props.inputChangeHandler}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                id="password" 
                onChange={props.inputChangeHandler}
              />

              <Button
                color='teal'
                fluid
                size='large'
                onClick={e => props.loginHandler(e)}
              >
                Login
            </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    // <form>
    //   <div>
    //     <Input
    //       placeholder='Email'
    //       id="email"
    //       onChange={props.inputChangeHandler} />
    //   </div>

    //   <div>
    //     <Input
    //       placeholder='Password'
    //       id="password" 
    //       onChange={props.inputChangeHandler} />
    //   </div>
    //   <Button
    //     primary
    //     onClick={e => props.loginHandler(e)}
    //     id="submit">
    //     Submit
    //   </Button>
    // </form>



  );
};

export default LoginForm;
