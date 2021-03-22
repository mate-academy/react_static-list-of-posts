import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <ul className="post__user user">
    <li className="user__name">{`name: ${user.name}`}</li>
    <li className="user__email">{`email: ${user.email}`}</li>
  </ul>
);

User.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
