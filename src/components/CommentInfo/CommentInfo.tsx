import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comment">
      <p className="comment__name" data-cy="comment-name">
        {name}
      </p>

      <p className="comment__body" data-cy="comment-body">
        {body}
      </p>

      <p className="comment__email" data-cy="comment-email">
        {email}
      </p>
    </div>
  );
};
