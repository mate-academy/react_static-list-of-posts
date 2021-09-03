import React from 'react';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    name,
    body,
    email,
  } = props.comment;

  return (
    <>
      <li>{name}</li>
      <li>{body}</li>
      <li>{email}</li>
    </>
  );
};
