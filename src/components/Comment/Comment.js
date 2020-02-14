import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="post-comments__item">
    <h4 className="post-comments__title">{name}</h4>
    <p className="post-comments__body">{body}</p>
    <p className="post-comments__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
