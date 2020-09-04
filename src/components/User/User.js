import React from 'react';
import propTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <section className="post-list__user">
    <h3>{name}</h3>
    <span>{email}</span>
    <span>{address.city}</span>
  </section>
);

User.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  address: propTypes.shape({
    city: propTypes.string.isRequired,
  }).isRequired,
};

export default User;
