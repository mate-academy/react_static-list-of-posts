import React from 'react';

import '../CommentList/CommentList.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div className="box">
    <a href={email} className="box__email">{email}</a>

    <div className="box__content">
      <p className="box__name">{name}</p>
      {body}
    </div>
  </div>
);
