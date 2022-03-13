import React from 'react';

type Props = {
  name: string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <>
    <b>
      {name}
    </b>
    <br />
    <i>
      {email}
    </i>
    <br />
    {body}
  </>
);
