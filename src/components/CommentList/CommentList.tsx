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
      <li className="comments__item">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
