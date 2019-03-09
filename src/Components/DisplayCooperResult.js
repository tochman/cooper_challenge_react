import React, { Component } from "react";
import cooperCalculator from "../Modules/Coopercalculator";
import { saveData } from "../Modules/PerformanceData";
import { Message, Button, Grid } from 'semantic-ui-react';


class DisplayCooperResult extends Component {
  calculate() {
    return cooperCalculator(
      this.props.distance,
      this.props.gender,
      this.props.age
    );
  }

  async saveCooperData() {
    const result = this.calculate();
    const values = {
      gender: this.props.gender,
      distance: this.props.distance,
      age: this.props.age
    }
    try {
      await saveData(result, values);
      this.props.entryHandler();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;

    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveButton = (
        <>
          <Button id="save-result"
            onClick={this.saveCooperData.bind(this)}>
            Save entry
          </Button>
        </>
      );
    } else if (
      this.props.authenticated === true &&
      this.props.entrySaved === true
    ) {
      saveButton = (
        <>
          <p>Your entry was saved</p>
        </>
      );
    }

    if (this.props.age !== "" && this.props.distance !== "") {
      results = (
        <Message>
          <p>
            {this.props.age} y/o {this.props.gender} running{" "}
            {this.props.distance} meters.
          </p>
          <p>Result: {this.calculate()}</p>
          {saveButton}
        </Message>
      );
    }
    return (
      <>
        <Grid columns={1} doubling stackable>
          <Grid.Column>
            {results}

          </Grid.Column>
        </Grid>
      </>

    )

  }
}

export default DisplayCooperResult;
