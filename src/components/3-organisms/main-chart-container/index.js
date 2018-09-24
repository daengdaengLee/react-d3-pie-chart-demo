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
    this._inc = this._inc.bind(this);
  }

  render() {
    const { _inc } = this;
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
        <ChartController
          onClickRed={() => _inc('red')}
          onClickGreen={() => _inc('green')}
          onClickBlue={() => _inc('blue')}
        />
      </div>
    );
  }

  _inc(type) {
    this.setState(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  }
}

export default MainChartContainer;
