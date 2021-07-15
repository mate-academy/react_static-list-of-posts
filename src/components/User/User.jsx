import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="post__info">
    <p>{`Author: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
    <p>{`Address: ${address.city}, ${address.street}, ${address.suite}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
