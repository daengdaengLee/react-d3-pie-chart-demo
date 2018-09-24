import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ControllerHandle from '../../1-atoms/controller-handle';

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
        <ControllerHandle
          type="red"
          style={{ marginRight: '1rem' }}
          onDragStart={event => _onDragStart('red', event)}
          onClick={onClickRed}
        />
        <ControllerHandle
          type="green"
          style={{ marginRight: '1rem' }}
          onDragStart={event => _onDragStart('green', event)}
          onClick={onClickGreen}
        />
        <ControllerHandle
          type="blue"
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
