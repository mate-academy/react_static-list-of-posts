import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="comment-item">
    <h3 className="comment-name">{name}</h3>
    <p className="comment-body">{body}</p>
    <p className="commeny-email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
