import React from 'react';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { email, name, body } = comment;

  return (
    <div className="comment">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <p>{body}</p>
    </div>
  );
};
