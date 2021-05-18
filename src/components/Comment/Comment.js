import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <li>
    <h3>{name}</h3>
    <p>{body}</p>
    <span>{email}</span>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string.isRequired,
  email: PropTypes.string,
};

Comment.defaultProps = {
  name: '',
  email: '',
};

export default Comment;
