import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ userInfo }) => {
  const { name, email, address } = userInfo;

  return (
    <ul className="post__author">
      <li className="post__author-name">
        {name}
      </li>
      <li className="post__author-email">
        {email}
      </li>
      <li className="post__author-street">
        {address.city}
      </li>
      <li className="post__author-suite">
        {address.street}
      </li>
      <li className="post__author-city">
        {address.suite}
      </li>
    </ul>
  );
};

User.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
