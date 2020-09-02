import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <p key={user.id}>
    {`${user.name}, ${user.email}, ${user.address.city}`}
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.number.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

};

export default User;
