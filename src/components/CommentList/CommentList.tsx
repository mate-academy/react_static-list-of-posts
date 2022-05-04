import React from 'react';
import { Comment } from '../../types/ReadyPosts';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="commentsList" data-cy="comments-list">
    {comment.map(comm => (
      <li key={comm.id}>
        <CommentInfo comment={comm} />
      </li>
    ))}
  </ul>
);
