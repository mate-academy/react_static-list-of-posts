import React from 'react';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <p className="comment__title">
        Title:
        {` ${name}`}
      </p>

      <p className="comment__email">
        Email:
        {` ${email}`}
      </p>

      <p className="comment__subject">
        Subject:
        {` ${body}`}
      </p>
    </div>
  );
};
