import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
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
      const data = {
        datasets: [{
          data: distances
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: labels
      };

      dataIndex = (
        <>
          <Bar ref='chart' data={data} />
        </>
      )


    }





    return (
      <div>
        {dataIndex}
        
      </div>
    );
  }
}
export default DisplayPerformanceData;
