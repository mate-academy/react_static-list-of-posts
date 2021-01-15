import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ body, name, email }) => (
  <>
    <p>{body}</p>
    <p>
      <span>{name}</span>
      {' '}
      <br />
      <span>{email}</span>
    </p>
  </>
);

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
