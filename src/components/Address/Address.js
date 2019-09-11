import React from 'react';
import PropTypes from 'prop-types';
import './Address.css';

function Address({ address }) {
  if (!address) {
    return null;
  }

  const {
    street, suite, city, zipcode,
  } = address;

  return (
    <div className="address">
      <span>{street}</span>
      <span>{suite}</span>
      <span>{city}</span>
      <span>{zipcode}</span>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }),
};

Address.defaultProps = {
  address: undefined,
};

export default Address;
