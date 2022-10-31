import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Comments = {
  comments: Comment[],
};

export const CommentList: React.FC<Comments> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}

  </div>
);
