import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <p className="user">
    author:
    {' '}
    {user.name}
    <div>
      e-mail:
      {' '}
      {user.email}
    </div>
    <div>
      address:
      {' '}
      {user.address.city}
,
      {' '}
      {user.address.zipcode}
    </div>
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,

    }),
  }).isRequired,
};
