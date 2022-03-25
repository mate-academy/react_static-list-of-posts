import React from 'react';
import { Comment } from './types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
