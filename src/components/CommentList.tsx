import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comment">
    {comments.map(comm => (
      <li key={comm.id} className="comment__list">
        <CommentInfo comment={comm} />
      </li>
    ))}
  </ul>
);
