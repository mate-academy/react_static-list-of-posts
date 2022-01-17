import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../Types/Types';

type Props = {
  comments: Comment[];
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ul>
    <h3>Comments:</h3>

    {comments.map((comment) => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
