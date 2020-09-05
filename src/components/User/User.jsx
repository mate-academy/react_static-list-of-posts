import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p>
      {name}
    </p>
    <p>
      {email}
    </p>
    <p>
      {address.city}
    </p>
  </div>
);

User.defaultProps = {
  address: null,
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string),
};
