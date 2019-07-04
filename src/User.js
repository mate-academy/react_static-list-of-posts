import PropTypes from 'prop-types';
import React from 'react';
import users from './api/users';

const User = ({ userId }) => {
  const user = users.find(persone => persone.id === userId);
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </div>
  );
};

User.propTypes = {
  userId: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
};

export default User;
