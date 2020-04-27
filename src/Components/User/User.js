import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div className="post__author">
    <span className="post__author-name">{name}</span>
    <a href="link" className="post__author-email">{email}</a>
    <span className="post__author-address">
      {`${address.street} ${address.suite} ${address.city}`}
    </span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
