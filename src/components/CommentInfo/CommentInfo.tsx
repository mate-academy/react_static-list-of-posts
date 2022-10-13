import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <li className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

        <span className="CommentInfo__by">by</span>

        <a href={`mailto:${email}`} className="CommentInfo__email">
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </li>
  );
};
