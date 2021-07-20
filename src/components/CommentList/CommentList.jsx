import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf.isRequired,
};

export default CommentList;
