import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__contacts">
      <p>{name}</p>
      <p>{email}</p>
    </div>
    <p>{body}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
