import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <li className="comments__item">
    <h3 className="comments__item-title">{name}</h3>
    <span className="comments__item-email">{email}</span>
    <p className="comments__item-body">{body}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
