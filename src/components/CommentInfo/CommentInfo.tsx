import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div className="comment">
    <p className="comment__email">{email}</p>
    <h3 className="comment__title">{name}</h3>
    <p>{body}</p>
  </div>
);
