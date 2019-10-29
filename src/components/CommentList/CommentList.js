import React from 'react';
import Comment from '../Comment/Comment';

// eslint-disable-next-line react/prop-types
function CommentList({ commentList }) {
  return (
    <ul className="comment-list">
       Comments:
      {commentList.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ul>
  );
}

export default CommentList;
