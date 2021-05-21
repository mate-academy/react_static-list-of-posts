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
    <div>
      <span className="User__title">
        {`Email: `}
      </span>
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <p>
      <span className="User__title">
        {`Address: `}
      </span>
      {`${address.city}, ${address.street}, ${address.suite}`}
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
