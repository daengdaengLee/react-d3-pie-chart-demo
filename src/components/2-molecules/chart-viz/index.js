import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { pie, arc } from 'd3';

const _notEqual = _.negate(_.isEqual);

const _or = (...args) => _.some(args);

class ChartViz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this._container = React.createRef();
    this._updateSize = this._updateSize.bind(this);
    this._arcD = this._arcD.bind(this);
    this._onDrop = this._onDrop.bind(this);
  }

  render() {
    const { _container, _arcD, _preventDefault, _onDrop } = this;
    const { red, green, blue } = this.props;
    const { width, height } = this.state;
    const data = [
      { label: 'red', value: red },
      { label: 'green', value: green },
      { label: 'blue', value: blue },
    ];
    const pieData = pie()
      .sort(null)
      .value(d => d.value)(data);
    return (
      <svg
        ref={_container}
        style={{ height: 0, flexGrow: 1 }}
        onDragOver={_preventDefault}
        onDrop={_onDrop}
      >
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {pieData.map(obj => (
            <path key={obj.index} d={_arcD(obj)} fill={obj.data.label} />
          ))}
        </g>
      </svg>
    );
  }

  componentDidMount() {
    this._updateSize();
  }

  componentDidUpdate() {
    this._updateSize();
  }

  _updateSize() {
    const {
      _container: { current: container },
    } = this;
    const { width, height } = this.state;
    const { clientWidth, clientHeight } = container;
    if (_or(_notEqual(width, clientWidth), _notEqual(height, clientHeight))) {
      this.setState({
        width: clientWidth,
        height: clientHeight,
      });
    }
  }

  _arcD(d) {
    const { width, height } = this.state;
    const distance = _.min([width, height]);
    return arc()
      .innerRadius(distance / 8)
      .outerRadius(distance / 4)(d);
  }

  _preventDefault(event) {
    event.preventDefault();
  }

  _onDrop(event) {
    const type = event.dataTransfer.getData('type');
    const { onInc } = this.props;
    onInc(type);
  }
}

ChartViz.defaultProps = {
  red: 1,
  green: 1,
  blue: 1,
  onInc: () => {},
};

ChartViz.propTypes = {
  red: PropTypes.number,
  green: PropTypes.number,
  blue: PropTypes.number,
  onInc: PropTypes.func,
};

export default ChartViz;
