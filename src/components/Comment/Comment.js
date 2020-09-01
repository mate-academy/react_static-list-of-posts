import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <p>{name}</p>
    <p>{email}</p>
    <p>{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
