import React, { Component } from "react";
import "./App.css";
import DisplayCooperResult from "./Components/DisplayCooperResult";
import LoginForm from "./Components/LoginForm";
import InputFields from "./Components/InputFields";
import { authenticate } from "./Modules/Auth";
import DisplayPerformanceData from "./Components/DisplayPerformanceData";
import { Container, Header, Button, Message } from 'semantic-ui-react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      gender: "female",
      age: "",
      renderLoginForm: false,
      authenticated: false,
      email: "",
      password: "",
      message: "",
      entrySaved: false
    };
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    });
  }

  onGenderChange(value) {
    this.setState({
      gender: value
    })
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password);
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false });
    }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  render() {
    let renderLogin, performanceDataIndex, user;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem("credentials")).uid;
      renderLogin = (
        <Message positive>
          <p>Hi {user}</p>
        </Message>
        
      );
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <Button
              primary
              onClick={() => this.setState({ renderIndex: false })}>
              Hide past entries
            </Button>
          </>
        );
      } else {
        performanceDataIndex = (
          <Button
            primary
            id="show-index"
            onClick={() => this.setState({ renderIndex: true })}
          >
            Show past entries
          </Button>
        );
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <>
            <LoginForm
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        );
      } else {
        renderLogin = (
          <>
            <Button
              primary
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p>{this.state.message}</p>
          </>
        );
      }
    }

    return (
      <div>
        <Container>
          <Header as='h2'>Cooper Test Assessment</Header>

          {renderLogin}

          <InputFields
            inputChangeHandler={this.onChange.bind(this)}
            inputGenderChangeHandler={this.onGenderChange.bind(this)}
          />

          <DisplayCooperResult
            distance={this.state.distance}
            gender={this.state.gender}
            age={this.state.age}
            authenticated={this.state.authenticated}
            entrySaved={this.state.entrySaved}
            entryHandler={this.entryHandler.bind(this)}
          />
          {performanceDataIndex}
        </Container>

      </div>
    );
  }
}

export default App;
