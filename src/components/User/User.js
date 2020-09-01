import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

export const User = ({ user }) => (
  <div className="user">
    <div className="user__name">{user.name}</div>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <div>
      {`${user.address.city}, ${user.address.street}`}
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.object,
  }).isRequired,
};
