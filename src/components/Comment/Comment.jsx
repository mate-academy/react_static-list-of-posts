import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <span>{email}</span>
  </>
);

Comment.prototype = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
