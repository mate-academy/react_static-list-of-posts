import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({ name, email, body }) => (
  <div className="comment">
    <h3 className="comment__name">{name}</h3>
    <p className="comment__email">{email}</p>
    <p className="comment__text">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
