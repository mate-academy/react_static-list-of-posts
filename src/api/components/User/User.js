import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>
      {user.name}
    </p>
    <adress>
      {user.address.city}
      <br />
      {user.address.street}
    </adress>
    <a href={user.email}>
      {user.email}
    </a>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
