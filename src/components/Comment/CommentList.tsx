import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/User';
import './CommentList.scss';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul className="CommentList" data-cy="comments-list">
    {comment.map(comm => (
      <li className="PostList__items" key={comm.id}>
        <CommentInfo comment={comm} />
      </li>
    ))}
  </ul>
);
