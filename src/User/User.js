import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = ({ name, email, address }) => (
  <div className="posts-list__post__author">
    <p className="name">
      <b>Author</b>: {name}
    </p>
    <p className="email">
      Email:
      <em>
        <a href={email}> {email}</a>
      </em>
    </p>
    <p className="adress">
      From: {address.city}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
