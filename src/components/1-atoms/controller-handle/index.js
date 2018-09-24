import React from 'react';
import PropTypes from 'prop-types';

const ControllerHandle = ({ type, style, onDragStart, onClick }) => (
  <div
    style={{
      width: '1rem',
      height: '1rem',
      backgroundColor: type,
      cursor: 'pointer',
      ...style,
    }}
    draggable
    onDragStart={onDragStart}
    onClick={onClick}
  />
);

ControllerHandle.defaultProps = {
  type: 'black',
  style: {},
  onDragStart: () => {},
  onClick: () => {},
};

ControllerHandle.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  onDragStart: PropTypes.func,
  onClick: PropTypes.func,
};

export default ControllerHandle;
