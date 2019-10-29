import React from 'react';
import Comment from '../Comment/Comment';

function CommentList({ commentList }) {
  return (
    <div className="ui comments">
      {commentList.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default CommentList;
