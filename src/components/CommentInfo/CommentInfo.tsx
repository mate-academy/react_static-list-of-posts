import React from 'react';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <h4 className="comment-list__name" data-cy="comment-name">
      {name}
    </h4>
    <p className="comment-list__body" data-cy="comment-body">
      {body}
    </p>
    <a className="comment-list__link" href={`mailto:${email}`} data-cy="comment-email">Email</a>
  </>
);
