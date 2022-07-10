import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/types';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
