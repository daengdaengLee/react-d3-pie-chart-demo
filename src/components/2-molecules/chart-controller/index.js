import React from 'react';
import PropTypes from 'prop-types';

const ChartController = ({ onClickRed, onClickGreen, onClickBlue }) => (
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
      onClick={onClickGreen}
    />
    <div
      style={{
        width: '1rem',
        height: '1rem',
        backgroundColor: 'blue',
        cursor: 'pointer',
      }}
      onClick={onClickBlue}
    />
  </div>
);

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
