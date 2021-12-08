import React from 'react';
import { Comment } from '../../types/Comment';

type Props = Comment;

export const CommentInfo: React.FC<Props> = ({
  id, name, body, email,
}) => (
  <div key={id} className="comment">
    <h4 className="comment__title">{name}</h4>

    <p className="comment__body">{body}</p>
    {'Email: '}
    <a href={`mailto: ${email}`} className="comment__email">{email}</a>
  </div>
);
