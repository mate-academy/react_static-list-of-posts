import React from 'react';
import PropTypes from 'prop-types';

const User = props => (
  <div className="user_information">
    <p>
      <b>Name</b>
      {' '}
      {props.user.name}
    </p>
    <p>
      <b>Nick name</b>
      {' '}
      {props.user.username}
    </p>
    <p>
      <b>Email</b>
      {' '}
      {props.user.email}
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
