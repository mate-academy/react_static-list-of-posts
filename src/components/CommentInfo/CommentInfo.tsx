/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Comment } from '../../types/comment';
import './CommentInfo.scss';

type Props = {
  commentInfo: Comment;
};

export const CommentInfo: React.FC<Props> = ({ commentInfo }) => {
  const { name } = commentInfo;
  const { email } = commentInfo;
  const { body } = commentInfo;

  return (
    <>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </>
  );
};
