import React from 'react';
import { Comment } from '../../types/comment';

type Props = {
  commentInfo: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    commentInfo,
  } = props;

  const {
    name,
    body,
    email,
  } = commentInfo;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

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
  );
};
