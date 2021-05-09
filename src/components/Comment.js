import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <h5 className="comment__title">{name}</h5>
    <p className="comment__body">{body}</p>
    <span className="comment__email">{email}</span>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
