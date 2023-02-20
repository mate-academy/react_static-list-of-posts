import React from 'react';

type Props = {
  name: string;
  email:string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({
  name,
  email,
  body,
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo_title">
      <strong className="CommentInfo_name">
        {name}
      </strong>

      {' by '}

      <a
        href={`mailto:${email}`}
        className="CommentInfo_email"
      >
        {email}

      </a>
    </div>

    <div className="CommentInfo_body">
      {body}
    </div>
  </div>
);
