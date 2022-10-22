import React from 'react';

export type CommentInfoProps = {
  name: string,
  email: string,
  body: string,
  // eslint-disable-next-line react/no-unused-prop-types
  id: number,
};

export const CommentInfo: React.FC<CommentInfoProps> = ({
  name,
  email,
  body,
}) => (
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

    <div className="CommentInfo__body">
      {body}
    </div>
  </>
);
