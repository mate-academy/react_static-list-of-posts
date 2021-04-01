import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,

}) => (
  <>
    <h2>
      {name}
    </h2>
    <h3>
      {email}
    </h3>
    <p>
      {`${address.zipcode}
      city:  
      ${address.city} 
      street:
      ${address.street}
      /
      ${address.suite}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
