import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map(comment => (
        <li className="comments__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
