import React from 'react';
import { Comment } from '../types/comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <ul>
    <h3>Comments:</h3>
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);
