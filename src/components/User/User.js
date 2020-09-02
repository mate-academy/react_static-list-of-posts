import React from 'react';
import propTypes from 'prop-types';

const User = ({ user }) => (
  <section className="post-list__user">
    <h3>{user.name}</h3>
    <span>{user.email}</span>
    <span>{user.address.city}</span>
  </section>
);

User.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    address: propTypes.shape({
      city: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
