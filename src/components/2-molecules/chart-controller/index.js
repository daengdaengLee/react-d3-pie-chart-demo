import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChartController extends Component {
  render() {
    const { _onDragStart } = this;
    const { onClickRed, onClickGreen, onClickBlue } = this.props;
    return (
      <div
        style={{
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '1rem',
            height: '1rem',
            backgroundColor: 'red',
            marginRight: '1rem',
            cursor: 'pointer',
          }}
          draggable
          onDragStart={event => _onDragStart('red', event)}
          onClick={onClickRed}
        />
        <div
          style={{
            width: '1rem',
            height: '1rem',
            backgroundColor: 'green',
            marginRight: '1rem',
            cursor: 'pointer',
          }}
          draggable
          onDragStart={event => _onDragStart('green', event)}
          onClick={onClickGreen}
        />
        <div
          style={{
            width: '1rem',
            height: '1rem',
            backgroundColor: 'blue',
            cursor: 'pointer',
          }}
          draggable
          onDragStart={event => _onDragStart('blue', event)}
          onClick={onClickBlue}
        />
      </div>
    );
  }

  _onDragStart(type, event) {
    event.dataTransfer.setData('type', type);
  }
}

ChartController.defaultProps = {
  onClickRed: () => {},
  onClickGreen: () => {},
  onClickBlue: () => {},
};

ChartController.propTypes = {
  onClickRed: PropTypes.func,
  onClickGreen: PropTypes.func,
  onClickBlue: PropTypes.func,
};

export default ChartController;
