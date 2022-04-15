import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul data-cy="comments-list">
      {comments.map(comment => (
        <li key={comment.id}>
          <CommentInfo
            name={comment.name}
            text={comment.body}
            mail={comment.email}
          />
        </li>
      ))}
    </ul>
  );
};
