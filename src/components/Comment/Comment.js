import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, email, body }) => (
  <p className="comment">
    <span className="comment-name">{name}</span>
    <a href={`mailto:${email}`} className="email">{email}</a>
    <span className="content">{body}</span>
  </p>
);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
