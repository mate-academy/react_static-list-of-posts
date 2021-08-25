import React from 'react';
import { Comment } from '../../types/Comment';

export const CommentInfo: React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <>
    <h5>{name}</h5>
    <span>
      {'by: '}
      <a className="post__link" href={`mailto:${email}`}>{email}</a>
    </span>
    <p>{body}</p>
  </>
);
