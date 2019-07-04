import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user_information">
    <p>
      <b>Name</b>
      {' '}
      {user.name}
    </p>
    <p>
      <b>Nick name</b>
      {' '}
      {user.username}
    </p>
    <p>
      <b>Email</b>
      {' '}
      {user.email}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
