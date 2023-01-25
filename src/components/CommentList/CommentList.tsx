import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/comment';

import './CommentList.scss';

export type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
