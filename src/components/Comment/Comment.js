import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, email, body }) => (
  <p className="posts__comment">
    <span className="posts__comment-name">{name}</span>
    <a href={`mailto:${email}`} className="posts__comment-email">{email}</a>
    <span className="posts__comment-text">{body}</span>
  </p>
);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
