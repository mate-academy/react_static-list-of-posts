import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
  <div className="name">
    <h3>{name}:</h3>
    <p>{email}</p>
  </div>
  <p><span className="address">Address:</span> {address.street},
  {' '}
  <span className="address">suite:</span> {address.suite}</p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
