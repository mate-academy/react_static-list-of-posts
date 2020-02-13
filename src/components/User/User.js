import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, username, email }) => (
  <div className="post-author">
    <p>{email}</p>
    <a href="null">
      <p>{username}</p>
    </a>
    <p>{name}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
