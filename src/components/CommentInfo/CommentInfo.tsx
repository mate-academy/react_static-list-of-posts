import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = (
  { comment: { name, email, body } },
) => (
  <div className="CommentInfo event">
    <div className="content">
      <div className="summary">
        <a href={`mailto:${email}`} className="CommentInfo__email">{email}</a>
        {' commented:'}
        <br />
        <p className="CommentInfo__name">
          {name}
        </p>
      </div>

      <div className="CommentInfo__body extra text">
        {body}
      </div>

      <div className="meta">
        <a className="reply" href="#reply">
          <i className="reply icon" />
          Reply
        </a>
      </div>
    </div>
  </div>
);
