import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../types/Comment';

interface Comments {
  comments: Comment[],
}

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
