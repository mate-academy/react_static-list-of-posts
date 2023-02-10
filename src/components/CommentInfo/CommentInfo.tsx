import React from 'react';

import { Comment } from '../../types/Comments';

interface Allcoments {
  comment: Comment;
}

export const CommentInfo: React.FC<Allcoments> = ({ comment }) => {
  const {
    postId,
    name,
    email,
    body,
  } = comment;

  return (
    <div className="CommentInfo" key={postId}>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">{body}</div>
    </div>
  );
};
