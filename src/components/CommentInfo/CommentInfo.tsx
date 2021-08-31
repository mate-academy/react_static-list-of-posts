import React from 'react';
import { Comment } from '../../types/Comment';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <h5>{name}</h5>
      <span>
        {'by: '}
        <a className="post__link" href={`mailto:${email}`}>{email}</a>
      </span>
      <h4>{body}</h4>
    </>
  );
};
