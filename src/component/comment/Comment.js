import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__title">{comment.name}</h3>
    <p className="comment__text">{comment.body}</p>
    <a
      href={`mailto:${comment.email}`}
      className="comment__email"
    >
      {comment.email}
    </a>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(Object).isRequired,
};
