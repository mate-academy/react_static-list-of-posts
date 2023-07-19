import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentListItem = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListItem> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
