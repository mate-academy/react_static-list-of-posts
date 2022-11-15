import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  info: Comment
};

export const CommentInfo: React.FC<Props> = ({ info }) => (
  <li>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{info.name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href="mailto:{one.email}"
        >
          {info.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {info.body}
      </div>
    </div>
  </li>
);
