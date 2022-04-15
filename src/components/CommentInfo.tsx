import React from 'react';

type Props = {
  name: string;
  text: string;
  mail: string;
};

export const CommentInfo: React.FC<Props> = ({ name, text, mail }) => {
  return (
    <>
      <p data-cy="comment-name">{name}</p>
      <p data-cy="comment-body">{text}</p>
      <p data-cy="comment-email">{mail}</p>
    </>
  );
};
