import React from 'react';

import './CommentInfo.scss';

interface Props {
  name: string,
  text: string,
  email: string,
}

export const CommentInfo: React.FC<Props> = ({ name, text, email }) => (
  <>
    <h3 className="comment-name" data-cy="comment-name">
      {name}
    </h3>
    <p className="comment-text" data-cy="comment-body">
      {text}
    </p>
    <p className="comment-author__email" data-cy="comment-email">
      {email}
    </p>
  </>
);
