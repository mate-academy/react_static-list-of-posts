import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <>
    <h4>{name}</h4>
    <span>{email}</span>
    <p>{body}</p>
  </>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
