import React from 'react';

interface Props {
  name: string | undefined,
  email: string | undefined,
  body: string | undefined,
}

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>
      {' by '}

      <a
        className="CommentInfo__email"
        href={email}
      >
        {email}
      </a>
    </div>
    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
