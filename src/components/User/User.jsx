import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="info">
    <p className="info__name">
      {name}
    </p>
    <a href={`mailto: ${email}`} className="info__email-link">
      {email}
    </a>
    <p className="info__address">
      {`${address.city}, ${address.street}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape().isRequired,
};
