import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <section className="User">
    <p className="User__name">
      {name}
    </p>

    <span>
      {email}
    </span>

    <br />

    <span>
      {address.city}
    </span>
  </section>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};
