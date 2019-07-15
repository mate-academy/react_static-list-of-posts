import React from 'react';
import PropTypes from 'prop-types';

const CounterCMNTs = ({counter}) => (
  <div className="cmtsN">
    ----- {counter} comments:
  </div>
);

CounterCMNTs.defaultProps = {
  counter: 0,
};

CounterCMNTs.propTypes = {
  counter: PropTypes.number,
};

export default CounterCMNTs;
