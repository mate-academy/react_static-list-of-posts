import React from 'react';

type Props = {
  title: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = (
  {
    title, email, body,
  },
) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{title}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
