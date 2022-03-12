import React from 'react';

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <p>{body}</p>
    <h4>Author:</h4>
    <p>{`name: ${name}`}</p>
    <p>{`email: ${email}`}</p>
  </>
);

type Props = {
  name:string,
  email:string,
  body:string,
};
