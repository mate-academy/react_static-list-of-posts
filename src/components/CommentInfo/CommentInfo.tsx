import React from 'react';
import { Comment } from '../../types/Comment';

type Props = Omit<Comment, 'id' | 'postId'>;

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <h3 className="Comment__title" data-cy="comment-name">{name}</h3>
    <p className="Comment__body" data-cy="comment-body">{body}</p>
    <p className="Comment__email" data-cy="comment-email">{email}</p>
  </>
);
