import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <p className="posts__comment">
    <span className="posts__comment-name">{name}</span>
    <a href={`mailto:${email}`} className="posts__comment-email">{email}</a>
    <span className="posts__comment-text">{body}</span>
  </p>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
