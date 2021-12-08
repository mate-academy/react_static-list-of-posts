import React from 'react';
import { Comment } from '../Types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="post_commentInfo commentInfo">
      <div className="commentInfo_name">{comment.name}</div>
      <div className="commentInfo_body">{comment.body}</div>
      <div className="commentInfo_email">{comment.email}</div>
    </div>
  );
};
