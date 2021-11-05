import React from 'react';

import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="Comments-list">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <li key={comment.id} className="Comments-list__comment">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
