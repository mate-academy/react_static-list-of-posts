import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h4>{name}</h4>
    <p>{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
