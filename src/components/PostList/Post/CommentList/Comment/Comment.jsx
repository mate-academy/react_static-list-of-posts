import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="comment__author-name">{name}</p>
    <p className="comment__author-email user-email">{email}</p>
    <p className="comment__body">{body}</p>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
