import React from 'react';
import Comment from "../Comment/Comment";

function CommentList({comments}) {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment}/>
        </li>
      ))}
    </ul>
  )
}

export default CommentList;
