import React from 'react';
import { Comment } from '../../types/comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
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
};
