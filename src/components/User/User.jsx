import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="post-creator">
    <h3 className="post-creator__name">
      {name}
    </h3>

    <a href={`mailto:${email}`}>
      {email}
    </a>

    <p className="post-creator__city">
      {'City: '}
      <strong>{address.city}</strong>
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // eslint-disable-next-line
  address: PropTypes.object,
};

User.defaultProps = {
  address: 'User prefered to hidden his address',
};
