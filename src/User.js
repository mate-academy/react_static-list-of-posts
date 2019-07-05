import PropTypes from 'prop-types';
import React from 'react';

const User = ({ userData }) => (
  <div className="user_information">
    <p>
      <b>Name</b>
      {' '}
      {userData.name}
    </p>
    <p>
      <b>Nick name</b>
      {' '}
      {userData.username}
    </p>
    <p>
      <b>Email</b>
      {' '}
      {userData.email}
    </p>
  </div>
);

User.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
