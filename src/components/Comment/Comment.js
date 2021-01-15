import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comment-item">
    <p className="comment-item__name">{name}</p>
    <p>{body}</p>
    <p className="comment-item__email">{email}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
