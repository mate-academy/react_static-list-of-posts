import React from 'react';

import './CommentInfo.scss';

export interface Coment {
  id: number,
  name: string,
  body: string,
  email: string
}

type Props = {
  name: string,
  body: string,
  email: string
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <div className="name" data-cy="comment-name">
      {`${name}`}
    </div>
    <div className="body" data-cy="comment-body">
      {`${body}`}
    </div>
    <div className="email" data-cy="comment-email">
      {`${email}`}
    </div>
  </>
);
