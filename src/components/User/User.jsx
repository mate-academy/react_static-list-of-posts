import React from 'react';
import PropTypes from 'prop-types';

import './user.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="user">
    <p className="user__name">
      {name}
    </p>
    <p className="user__email">
      {email}
    </p>
    <p className="user__address">
      {`${address.city}, ${address.street}, ${address.suite}, ${address.city}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
