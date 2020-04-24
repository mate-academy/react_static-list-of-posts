import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, body, email }) => (
  <li className="comment__item">
    <p className="comment__user-name">
      {name}
    </p>
    <p className="comment__user-email">
      {email}
    </p>
    <p className="comment__user-text">
      {body}
    </p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
