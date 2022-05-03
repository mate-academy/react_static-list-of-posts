import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <div className="comment">
    <h3 className="comment__name" data-cy="comment-name">
      {name}
    </h3>

    <p className="comment__body" data-cy="comment-body">
      {body}
    </p>

    <a href={`mailto: ${email}`} className="comment__email" data-cy="comment-email">
      {`email: ${email}`}
    </a>
  </div>
);
