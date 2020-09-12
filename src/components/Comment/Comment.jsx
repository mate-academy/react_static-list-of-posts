import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <div className="comment-header">
      <p>{name}</p>
    </div>
    <div className="comment-description">
      <p>{body}</p>
    </div>
    <div className="comment-email">
      <p>{email}</p>
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
