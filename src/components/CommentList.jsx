import React from 'react';
import PropTypes from 'prop-types';

export const Comment = comment => (
  <>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
    <p className="email">{comment.email}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
