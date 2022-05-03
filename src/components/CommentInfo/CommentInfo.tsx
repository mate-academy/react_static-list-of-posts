import React from 'react';

import './commentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => {
  return (
    <>
      <p className="comment__email" data-cy="comment-email">
        {email}
      </p>

      <h5 className="comment__title" data-cy="comment-name">
        {name}
      </h5>

      <p className="comment__body" data-cy="comment-body">
        {body}
      </p>
    </>
  );
};
