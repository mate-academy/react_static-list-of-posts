import React from 'react';

import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="comments">
    <h2>Comments:</h2>
    {comments.map(comment => (
      <li key={comment.id} className="comments__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
