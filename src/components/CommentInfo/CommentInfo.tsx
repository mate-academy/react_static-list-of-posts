import React from 'react';
// import comments from '../../api/comments';
import { Comment } from '../../types/comments';

interface CommentInfoProps {
  comment: Comment;
}
export const CommentInfo: React.FC<CommentInfoProps> = ( { comment }) => {
  const {name, email, body} = comment;

  return comment ? (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {`by ${email}` }

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
  ) : null
  };
