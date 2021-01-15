import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="posts__item-comments-item">
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
