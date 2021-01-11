import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <span>{user.name}</span>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <span>
      {`${user.address.city}, ${user.address.street}`}
    </span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
