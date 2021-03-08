import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p>{name}</p>
    <p>{email}</p>
    <p>
      {`Street: ${address.street}`}
    </p>
    <p>
      {`City: ${address.city}`}
    </p>
    <p>
      {`Suite: ${address.suite}`}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
