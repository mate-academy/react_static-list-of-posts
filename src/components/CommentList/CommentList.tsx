import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../types/Comment';
import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="CommentsList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
