import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>
    <a href={`mailto: ${email}`} className="user__email">
      {email}
    </a>
    <address className="user__address">
      {`
        ${address.zipcode},
        ${address.city},
        ${address.street}
        ${address.suite}
      `}
    </address>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
