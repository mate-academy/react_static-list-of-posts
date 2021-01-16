import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="text">
    <h3>{name}</h3>
    <p>{body}</p>
    <span>{email}</span>
  </div>
);

Comment.propTypes = ({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
});
