import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="comment-list__name">{name}</div>
    <div className="comment-list__body">{body}</div>
    <div className="comment-list__email">{email}</div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
