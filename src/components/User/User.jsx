import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <section>
    <h2>{name}</h2>
    <p>{email}</p>
    <p>
      {`${address.street} ${address.suite} ${address.city}`}
    </p>
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
