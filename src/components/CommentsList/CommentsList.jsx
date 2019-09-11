import React from 'react';
import './CommentsList.scss';

import Comment from '../Comment/Comment';

function CommentsList({ comment }) {
  return (
    <div className="comments">
      {comment.map(item => <Comment comment={item} />)}
    </div>
  );
}

export default CommentsList;
