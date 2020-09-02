import React from 'react';
import Comment from '../Comment/Comment';

function CommentList({ list }) {
  return (
    <div className="postList__post-comments">
      {list.map(comment => <Comment {...comment} />)}
    </div>
  );
}

export default CommentList;
