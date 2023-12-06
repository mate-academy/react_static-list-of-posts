import React from 'react';

export const CommentInfo:
React.FC<{ comment: { name: string; email: string; body: string; } }>
= ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__name">{comment.name}</div>
    <a href={`mailto:${comment.email}`} className="CommentInfo__email">{comment.email}</a>
    <div className="CommentInfo__body">{comment.body}</div>
  </div>
);
