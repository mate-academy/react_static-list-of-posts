import React from 'react';

import { CommentListProps } from '../../types';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

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
