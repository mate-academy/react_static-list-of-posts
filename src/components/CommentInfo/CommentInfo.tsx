import React from 'react';

type Props = {
  comment: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <>
      <p className="comments__item">{body}</p>
      <p className="comments__infoName">
        <b>Author:</b>
        {` ${name}`}
      </p>
      <p className="comments__infoEmail">
        <b>Email:</b>
        {` ${email}`}
      </p>
    </>
  );
};
