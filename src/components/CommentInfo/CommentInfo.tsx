import React from 'react';

type Props = {
  comment: CommentItem,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  comment && (
    <div>
      <span className="post_comment-name">{comment.name}</span>
      <div className="post_comment-body">{comment.body}</div>
      <div className="post_comment-email">{comment.email}</div>
    </div>
  )
);
