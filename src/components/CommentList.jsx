import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <div key={comment.id} className="comments-item">
        <p>{comment.body}</p>
        <div className="text-muted">
          <div>{comment.name}</div>
          {comment.email}
        </div>
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
