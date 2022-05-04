import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../Types/comment';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <div className="comment">
    <p className="comment__name">
      {name}
    </p>
    <p className="comment__body">
      {body}
    </p>
    <p className="comment__text">
      {email}
    </p>
  </div>
);
