import React from 'react';

import { CommentListProps } from '../../types';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo
        comment={comment}
        key={comment.id}
      />
    ))}
  </div>
);
