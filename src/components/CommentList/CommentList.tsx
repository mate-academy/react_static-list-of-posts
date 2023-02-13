import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type CommentListProps = {
  comments: Comment[],
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(c => {
      return (
        <li key={c.id}>
          <CommentInfo comment={c} />
        </li>
      );
    })}
  </ul>
);
