import React from 'react';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <li className="comments__field">
    <div className="comments__email">
      <strong>From: </strong>
      {email}
    </div>
    <div className="comments__title">
      {name}
    </div>
    <div className="comments__body">
      {body}
    </div>
  </li>
);
