/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <div className="comment-container">
    <p className="comment-container__name">{name}</p>
    <p className="comment-container__body">{body}</p>
    <a href={`mailto: ${email}`} className="comment-container__email">{email}</a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
