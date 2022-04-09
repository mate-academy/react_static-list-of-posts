import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <div className="CommentInfo">
    <h3>
      {name}
    </h3>

    <p>
      {body}
    </p>

    <p>
      {email}
    </p>
  </div>

);
