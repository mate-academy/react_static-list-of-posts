import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({
  comment: {
    body,
    email,
    name,
  },
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href="mailto:Nikita@garfield.biz"
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>

);
