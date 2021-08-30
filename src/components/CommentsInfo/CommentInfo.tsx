import React from 'react';

import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <div className="comment">
      <h4>
        {`${name} (Email: ${email})`}
      </h4>

      <p>{body}</p>
    </div>
  );
};
