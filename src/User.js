import React from 'react';
import PropTypes from 'prop-types';

import users from './api/users';

const User = ({ userId }) => {
  const user = users.find(user => user.id === userId);
  return (
    <span>{user.name}</span>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default User;
