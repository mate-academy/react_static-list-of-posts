import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment_name">
      {comment.name}
      -
      {comment.email}
    </div>
    <div className="comment_body">{comment.body}</div>
  </>
);
