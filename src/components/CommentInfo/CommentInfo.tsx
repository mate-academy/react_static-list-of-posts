import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommenInfo__body">
      {body}
    </div>

  </>
);
