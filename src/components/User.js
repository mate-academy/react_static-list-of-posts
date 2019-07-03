import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <ul className="user">
      Author:
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.address.city}</li>
      <li>{user.address.street}</li>
      <li>user.address.suite</li>
    </ul>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};

export default User;
