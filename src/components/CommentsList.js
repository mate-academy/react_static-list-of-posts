import React from 'react';

const CommentList = props => (

  <div className="comment-list">
    <div>
      <p>{props.comment.name}</p>
      <p>{props.comment.email}</p>
      <p>{props.comment.body}</p>
    </div>

  </div>

);

export default CommentList;
