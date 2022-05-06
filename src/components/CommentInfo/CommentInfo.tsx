import React from 'react';
import { Comment } from '../../types/CommentI';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <p data-cy="comment-name">
      <strong>comment title:</strong>
      {' '}
      {name}
      {' '}
    </p>
    <p data-cy="comment-email">
      <strong>By:</strong>
      {' '}
      {email}
    </p>
    <p data-cy="comment-body">
      <strong>Comment body:</strong>
      {' '}
      {body}
    </p>
  </>
);

export default CommentInfo;
