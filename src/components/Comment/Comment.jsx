import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="post__comment">
    <p className="post__comment-name">{name}</p>
    <p className="post__comment-body">{body}</p>
    <p className="post__comment-email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
