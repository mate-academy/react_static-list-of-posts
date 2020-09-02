import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <p key={user.id} className="user">
    <div>{user.name}</div>
    <div>{user.email}</div>
    {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.number.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

};

export default User;
