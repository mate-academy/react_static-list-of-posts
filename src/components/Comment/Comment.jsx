import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <span>Comment</span>
    <h4 className="posts__comment-name">{name}</h4>
    <p className="posts__comment-body">{body}</p>
    <p className="posts__comment-email">{email}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
