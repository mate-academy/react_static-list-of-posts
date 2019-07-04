import React from 'react';

const Comment = ({currentComment}) => (
  <div className="comment">
    <p>{currentComment.body}</p>
    <span>{currentComment.name}</span>
    <span>{currentComment.email}</span>
  </div>
);

export default Comment;
