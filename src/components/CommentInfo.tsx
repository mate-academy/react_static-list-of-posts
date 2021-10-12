import React from 'react';
import { Comment } from '../types/Comments';

type Props = Pick<Comment, 'name' | 'body' | 'email' | 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <div className="comment-info">
      <div className="comment-info--title">{name}</div>
      <div>{body}</div>
      <div className="comment-info--email">{email}</div>
    </div>
  </>
);
