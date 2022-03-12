import React from 'react';
import { Comment } from '../types/interfaces';
import { CommentInfo } from './CommentInfo';

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <ul className="comments__list">
    <h3>Comments</h3>
    {comments.map(comment => (
      <li className="comments__comment" key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);

type Props = {
  comments: Comment[]
};
