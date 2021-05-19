import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {`Name: ${name}`}
    </div>
    <div className="user__email">
      {`Email: ${email}`}
    </div>
    <div className="user__address">
      {`Address: ${address.street}, ${address.city}`}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
