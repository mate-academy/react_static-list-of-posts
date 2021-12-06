import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = Omit<Comment, 'postId' | 'id'>;

export const CommentInfo:React.FC<Props> = ({ name, body, email }) => {
  return (
    <div className="comments__item comment">
      <h4 className="comment__name">{name}</h4>
      <p className="comment__body">{body}</p>
      <p className="comment__email">{email}</p>
    </div>
  );
};
