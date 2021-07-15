import React from 'react';
import CommentTypes from '../../types/CommentTypes';

export const Comment = ({ comment }) => {
  const userMail = comment.email;
  const atributHref = `mailto:${userMail}`;

  return (
    <>
      <p>{comment.name}</p>
      <p>{comment.body}</p>
      <a href={atributHref}>{comment.email}</a>
    </>
  );
};

Comment.propTypes = {
  comment: CommentTypes.isRequired,
};
