import React from 'react';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>{email}</p>
  </>
);
