import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p className="comment-name">{name}</p>
    <a href={`mailto:${email}`} className="comment-email">{email}</a>
    <p className="comment-body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
