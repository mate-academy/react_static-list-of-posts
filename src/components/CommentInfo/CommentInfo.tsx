import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comment">
      <p className="comment__name">
        {`Name: ${name}`}
      </p>
      <p className="comment__body">
        {`Body: ${body}`}
      </p>
      <p className="comment__email">
        {`Email: ${email}`}
      </p>
    </div>
  );
};
