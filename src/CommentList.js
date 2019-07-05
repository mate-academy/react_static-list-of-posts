import React from 'react';
// import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentList({ comments }) {
  return (
    <div className="all-comments">
      <h2>All comments</h2>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentList;
