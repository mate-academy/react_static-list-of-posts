import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <h3 className="User__title">
      {name}
    </h3>
    <a href={`mailto: ${email}`} className="User__email">
      {email}
    </a>
    <p className="User__address">
      {`${address.city}, ${address.street}, ${address.suite}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
