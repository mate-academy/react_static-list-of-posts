import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Types';

import './CommentList.scss';

interface Props {
  comments: Comment[]
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </div>
);
