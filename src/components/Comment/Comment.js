import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div className="comment">
    <h4 className="comment__title">{comment.name}</h4>
    <a
      href={`mailto:${comment.email}`}
      className="comment__link"
    >
      {comment.email}
    </a>
    <p className="comment__text">{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
