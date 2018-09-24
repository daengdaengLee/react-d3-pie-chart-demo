import React from 'react';
import PropTypes from 'prop-types';

const MainTemplate = ({ top, bottom }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ height: '4rem' }}>{top()}</div>
    <div style={{ height: 0, flexGrow: 1 }}>{bottom()}</div>
  </div>
);

MainTemplate.defaultProps = {
  top: () => null,
  bottom: () => null,
};

MainTemplate.propTypes = {
  top: PropTypes.func,
  bottom: PropTypes.func,
};

export default MainTemplate;
