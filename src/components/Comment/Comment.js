import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ name, email, body }) => (
  <>
    <p className="comment__name">{name}</p>
    <p className="comment__body">{body}</p>
    <a href="`{email}`" className="comment__email">{email}</a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
