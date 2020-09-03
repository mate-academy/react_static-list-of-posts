import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <section className="user">
    <h4>{name}</h4>
    <p>{email}</p>
    <address>{`${address.street}, ${address.suite}, ${address.city}`}</address>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
