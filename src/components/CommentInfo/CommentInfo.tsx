import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__user">
      <h3 className="CommentInfo__name" data-cy="comment-name">{`${name}`}</h3>
      {', '}

      <a className="CommentInfo__email" href={`mailto: ${email}`} data-cy="comment-email">{email}</a>
    </div>

    <p data-cy="comment-body">{body}</p>
  </div>
);
