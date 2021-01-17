import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <p className="User__name">{name}</p>
    <a
      href={`mailto:${email}`}
      className="User__email"
    >
      {email}
    </a>
    <p className="User__address">
      {`${address.suite}, ${address.street}, ${address.city}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    suite: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
