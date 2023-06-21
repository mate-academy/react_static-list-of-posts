import React from 'react';
import './CommentInfo.scss';

type Props = {
  commentName: string;
  email: string;
  commentBody: string;
};

export const CommentInfo: React.FC<Props> = ({
  commentName,
  email,
  commentBody,
}) => (
  <li className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{commentName}</strong>

      {' by '}

      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">{commentBody}</div>
  </li>
);
