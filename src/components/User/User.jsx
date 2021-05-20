import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <p className="post__author">
    <span className="post__author-name">
      {name}
    </span>
    <br />
    <span className="post__author-email">
      {email}
    </span>
    <br />
    <span className="post__author-address">
      {`${address.city}, ${address.street}, ${address.suite}`}
    </span>
  </p>
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
