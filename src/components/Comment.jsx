import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ body, email, name }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>{email}</p>
  </>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
