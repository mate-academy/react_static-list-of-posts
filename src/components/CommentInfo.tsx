import React from 'react';

type Props = {
  name: string,
  email: string,
  body: string;
};

export const CommentInfo:React.FC<Props> = ({ name, email, body }) => {
  return (
    <>
      <h2>{`Name: ${name}`}</h2>
      <a href="email">{`Email: ${email}`}</a>
      <p>{`Comment: ${body}`}</p>
    </>
  );
};
