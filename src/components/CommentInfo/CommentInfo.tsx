import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <>
    <h3>{name}</h3>
    <p>{email}</p>
    <p>{body}</p>
  </>

);
