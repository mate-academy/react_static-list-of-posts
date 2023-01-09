import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../types/Comment';
import './CommentsList.scss';

type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="CommentsList">
    {comments.map((comment) => (
      <li key={comment.id}><CommentInfo comment={comment} /></li>
    ))}
  </ul>
);
