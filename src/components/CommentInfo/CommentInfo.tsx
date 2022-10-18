import React from 'react';
import { Comment } from '../../types/comments';

export const CommentInfo: React.FC<Comment> = ({
  name, email, body, id,
}) => (
  <li
    className="CommentInfo"
    key={id}
  >
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {name}
      </strong>
      <a
        className="CommentInfo__email"
        href="mailto:Telly_Lynch@karl.co.uk"
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </li>
);
