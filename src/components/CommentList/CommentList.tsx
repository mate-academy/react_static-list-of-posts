import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
