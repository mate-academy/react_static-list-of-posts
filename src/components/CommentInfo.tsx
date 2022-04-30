import React from 'react';
import { Comment } from '../types/Comment';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <div className="comment">
      <p className="comment__name">
        {name}
      </p>
      <p className="comment__email">
        {email}
      </p>
      <p className="comment__body">
        {body}
      </p>
    </div>
  );
};
