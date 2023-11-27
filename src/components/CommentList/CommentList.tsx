import React from 'react';
import './CommentList.scss';
import { Comment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo
        key={comment.id}
        comment={comment}
      />
    ))}
  </div>
);
