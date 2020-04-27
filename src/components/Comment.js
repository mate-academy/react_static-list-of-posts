import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <li>
    <hr />
    <h4 className="comments__name">{name}</h4>
    <p className="comments__text">{body}</p>
    <p className="comments__email">{email}</p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
