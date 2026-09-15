import React from 'react';

import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import type { Comment } from '../../types';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
