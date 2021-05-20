import React from 'react';

import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="User">
    <p>
      <span className="User__title">
        {`User: `}
      </span>
      {name}
    </p>
    <p>
      <span className="User__title">
        {`Email: `}
      </span>
      {email}
    </p>
    <p>
      <span className="User__title">
        {`Address: `}
      </span>
      {address.street}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
  }).isRequired,
};
