import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ humans }) => (
  <>
    <div>{`Name: ${humans.name}`}</div>
    <div>{`Email: ${humans.email}`}</div>
    <div>{`Address: ${humans.address.street} ${humans.address.suite}`}</div>
  </>
);

User.propTypes = {
  humans: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.objectOf({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
