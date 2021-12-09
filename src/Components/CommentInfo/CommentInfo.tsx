import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../Types/Comment';

type Props = Omit<Comment, 'postId' | 'id'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <h2 className="comment__name">{name}</h2>
      <p className="comment__body">{body}</p>
      <p className="comment__email">{email}</p>
    </>
  );
};
