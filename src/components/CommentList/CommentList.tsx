import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentList.scss';

interface Props {
  comments: Comment[];
}
export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <ul key={comment.id}>
        <li data-cy="comment-name">{comment.name}</li>
        <li data-cy="comment-body">{comment.body}</li>
        <li data-cy="comment-email">{comment.email}</li>
      </ul>
    ))}
  </>
);
