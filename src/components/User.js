import React from 'react';
import PropTypes from 'prop-types';

import users from '../api/users';
import posts from '../api/posts';



const User = () => (
  <div>
    {users.map(user => (
      user.name
    ))}
  </div>
);

export default User;
