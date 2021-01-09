import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, city, street, suite }) => (
  <>
    <p>
      <em>Name:</em>
      {' '}
      {name}
    </p>
    <p>
      <em>Email:</em>
      {' '}
      {email}
    </p>
    <p>
      <em>Address:</em>
      {' '}
      {suite}
      {', '}
      {street}
      {', '}
      {city}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
};
