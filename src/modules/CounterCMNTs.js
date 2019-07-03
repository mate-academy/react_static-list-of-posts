import React from 'react';
import PropTypes from 'prop-types';

const CounterCMNTs = props => (
  <div className="cmtsN">
    ----- {props.counter} comments:
  </div>
);

CounterCMNTs.defaultProps = {
  counter: 0,
};

CounterCMNTs.propTypes = {
  counter: PropTypes.number,
};

export default CounterCMNTs;
