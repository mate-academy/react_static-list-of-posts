import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <li>
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
