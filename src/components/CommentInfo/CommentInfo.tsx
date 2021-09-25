import React from 'react';

export type Props = {
  comments: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comments } = props;
  const {
    name, body, email,
  } = comments;

  return (
    <>
      <h3 className="comment-card__title">
        {name}
      </h3>
      <p className="comment-card__text">
        {body}
      </p>
      <p className="comment-card__text">
        {email}
      </p>
    </>
  );
};
