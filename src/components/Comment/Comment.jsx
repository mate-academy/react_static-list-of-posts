import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="comments">
    <p className="comments__name">{name.toUpperCase()}</p>
    <p className="comment__email">{email}</p>
    <p className="comments__body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
