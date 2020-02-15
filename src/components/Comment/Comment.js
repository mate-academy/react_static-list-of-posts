import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ commentInfo }) => {
  const { name, email, body } = commentInfo;

  return (
    <li className="comment-list__item comment">
      <p className="comment__name">{name}</p>
      <p className="comment__email">{email}</p>
      <p className="comment__text">{body}</p>
    </li>
  );
};

Comment.propTypes = {
  commentInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
