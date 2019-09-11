import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';

function CommentList(props) {
  const {comments} = props;
  return (
    <div>
      {comments
        .map(comment => (<Comment comment={comment} key={comment.id} />))
      }
    </div>
  );
}

export default CommentList;
