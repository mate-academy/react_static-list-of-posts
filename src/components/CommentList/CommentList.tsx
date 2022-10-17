import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="CommentList">
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
