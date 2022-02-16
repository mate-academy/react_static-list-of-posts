import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <p className="name">
        {name}
      </p>
      <p>
        {body}
      </p>
      <p>
        {email}
      </p>
    </>
  );
};
