import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

interface Props {
  comments : Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
