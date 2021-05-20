import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <span className="comment__title">{name}</span>
    <a className="comment__author-email" href={`mailto:${email}`}>{email}</a>
    <p className="comment__body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string,
  email: PropTypes.string.isRequired,
};

Comment.defaultProps = {
  body: 'No comment',
};
