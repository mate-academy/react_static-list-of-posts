import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <div className="comments">
    <p className="comments__title">Comments:</p>
    <p>{name}</p>
    <p className="comments__text">{body}</p>
    <span>{email}</span>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,

};

export default Comment;
