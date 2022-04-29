import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../User';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="CommentList" data-cy="comments-list">
    {comment.map(comm => (
      <li className="PostList__items">
        <CommentInfo comment={comm} />
      </li>
    ))}
  </ul>
);
