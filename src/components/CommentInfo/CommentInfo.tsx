import React from 'react';

import './CommentInfo.scss';
import { Comments } from '../../react-app-env';

type Props = {
  comment: Comments,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <>
      <h2 className="post__comment-name" data-cy="comment-name">
        {name}
      </h2>
      <div className="post__comment-body" data-cy="comment-body">
        {body}
      </div>
      <a href={email} data-cy="comment-email">
        {email}
      </a>
    </>
  );
};
