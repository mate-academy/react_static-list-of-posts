import React from 'react';
import { Comment } from '../Types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <>
      <h6>
        {name}
        <small className="text-muted">
          {` (${email})`}
        </small>
      </h6>
      <span>{body}</span>
    </>
  );
};
