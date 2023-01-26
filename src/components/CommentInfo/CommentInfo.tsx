import React from 'react';

type CommentInfoProps = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<CommentInfoProps> = ({
  name,
  email,
  body,
}) => {
  return (
    <div className="CommentInfo">
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
    </div>
  );
};
