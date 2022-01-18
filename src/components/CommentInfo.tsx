import React from 'react';

interface Props {
  comment: CommentToPost,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="message">
    <span className="message-header">{`${comment.name} <${comment.email}>`}</span>
    <p className="message-body">{comment.body}</p>
  </div>
);
