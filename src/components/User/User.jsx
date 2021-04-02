import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="post__user-data">
    <strong>{name}</strong>
    <span className="post__email">{email}</span>
    <span>
      City:
      {' '}
      {address.city}
      ,
      street:
      {' '}
      {address.street}
      ,
      suite:
      {' '}
      {address.suite}
    </span>
  </div>
);

User.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }),
}).isRequired;
