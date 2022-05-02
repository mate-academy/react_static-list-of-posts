import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul data-cy="comments-list" className="comments">
    <strong>Comments:</strong>
    {comments.map(comment => (
      <li key={comment.id} className="comments__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
