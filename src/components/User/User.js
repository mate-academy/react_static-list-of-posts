import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="user user__list">
    <b>Post by:</b>
    <div className="user__item">{user.name}</div>
    <div className="user__item">{user.email}</div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
