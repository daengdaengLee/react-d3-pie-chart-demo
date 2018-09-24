import React, { Component } from 'react';
import ChartViz from '../../2-molecules/chart-viz';
import ChartController from '../../2-molecules/chart-controller';

class MainChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 1,
      green: 1,
      blue: 1,
    };
  }

  render() {
    const { red, green, blue } = this.state;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ChartViz red={red} green={green} blue={blue} />
        <ChartController />
      </div>
    );
  }
}

export default MainChartContainer;
