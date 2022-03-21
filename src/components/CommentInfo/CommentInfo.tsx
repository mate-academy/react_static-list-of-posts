import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <>
    <h2 className="comment-item__name">
      {name}
    </h2>
    <p className="comment-item__body">
      {body}
    </p>
    <p className="comment-item__email">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </p>
  </>
);
