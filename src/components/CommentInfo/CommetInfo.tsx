import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = Omit<Comment, 'postId' | 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <h3 className="comment__name">{name}</h3>
      <p className="comment__body">{body}</p>
      <p className="comment__email">{email}</p>
    </>
  );
};
