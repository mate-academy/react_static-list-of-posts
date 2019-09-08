import React from 'react';
import users from './api/users';
import PropTypes from 'prop-types';


const User = ({ userId }) => {
  const user = users.find(u => u.id === userId);
    return (
    <div>
      <span><b>User name: </b>{user.name}</span>
      <p><b>Nickname: </b>{user.username}</p>
    </div>
   )
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
  }).isRequired
};

export default User;
