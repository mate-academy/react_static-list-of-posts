import React from 'react';
import { Comment } from '../../../typedefs';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <div className="comments__author">
        <h2 className="comments__author-name">{name}</h2>
        <a className="comments__author-email" href={`mailto:${email}`}>{email}</a>
      </div>
      <p className="comments__body">{body}</p>
    </>
  );
};
