import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { CommentsListProps } from './CommentsList.types';
import './CommentList.scss';

export const CommentList: React.FC<CommentsListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
