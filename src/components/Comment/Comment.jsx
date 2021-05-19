import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="comment__name">{name}</div>
    <div className="comment__text">{body}</div>
    <a className="comment__email" href={email}>{email}</a>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
