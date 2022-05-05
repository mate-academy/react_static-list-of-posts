import React from 'react';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <h3 className="comment__name" data-cy="comment-name">
      {name}
    </h3>
    <p className="comment__body" data-cy="comment-body">
      {body}
    </p>
    <a className="comment__link" href={`mailto:${email}`} data-cy="comment-email">Email</a>
  </>
);
