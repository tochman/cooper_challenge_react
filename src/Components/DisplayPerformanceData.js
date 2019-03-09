import React, { Component } from "react";
import '../Modules/ChartExtensions'
import { Line, Doughnut } from 'react-chartjs-2';
import { Grid } from 'semantic-ui-react'

import { getData } from "../Modules/PerformanceData";



class DisplayPerformanceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      performanceData: null
    };
  }
  componentDidMount() {
    this.getPerformanceData();
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  getCount(collection, value) {
    let count = 0;
    collection.forEach(entry => {
      count += entry.data.message === value ? 1 : 0;
    })
    return count;
  }

  getLabels(collection) {
    let uniqueLabels = [];
    collection.forEach(entry => {
      if (entry.data.message && uniqueLabels.indexOf(entry.data.message) === -1) {
        uniqueLabels.push(entry.data.message);
      }
    })
    return uniqueLabels;
  }


  render() {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      const distances = []
      const labels = []
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
      })

      let uniqueLabels = this.getLabels(this.state.performanceData);
      let dData = [];

      uniqueLabels.forEach(label => {
        dData.push(this.getCount(this.state.performanceData, label));
      })

      const dataDoughnut = {
        labels: uniqueLabels,
        datasets: [{
          data: dData,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FF6344',
            '#36A1EB',
            '#FF6384',
          ],
        }],
        text: {
          content: 'Cooper Results',
          fontSize: 2,
          color: 'grey'
        }
      }

      const dataLine = {
        datasets: [{
          data: distances,
          label: 'Your stored runs',
        }],
        labels: labels,
      };

      dataIndex = (
        <>
          <Grid columns={2} doubling stackable>
            <Grid.Column>
              <Line ref='chart' data={dataLine} />
            </Grid.Column>
            <Grid.Column>
              <Doughnut data={dataDoughnut} />
            </Grid.Column>
          </Grid>
        </>
      )
    }

    return (
      <>
        {dataIndex}
      </>
    );
  }
}
export default DisplayPerformanceData;
