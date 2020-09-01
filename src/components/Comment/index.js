import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

function Comment({ name, body, email }) {
  return (
    <li className="comment">
      <h4>{name}</h4>
      <p>{body}</p>
      <p className="comment__email">{email}</p>
    </li>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
