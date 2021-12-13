import React from 'react';

import './CommentInfo.scss';

import { CommentInfoTypes } from '../../Types/CommentInfo';

type Props = CommentInfoTypes;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <h2 className="comment__name">{name}</h2>
      <p className="comment__body">{body}</p>
      <p className="comment__email">{email}</p>
    </>
  );
};
