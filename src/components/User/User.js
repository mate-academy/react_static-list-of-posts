import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <p>
      {user.address.street}
      {' '}
      {user.address.suite}
      {' '}
      {user.address.city}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
  }).isRequired,
};

export default User;
