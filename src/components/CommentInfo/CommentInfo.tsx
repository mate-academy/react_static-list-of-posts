import React from 'react';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const {
    name,
    body,
    email,
  } = props.comment;

  return (
    <>
      <li className="list-group-item list-group-item-info">{name}</li>
      <li className="list-group-item list-group-item-info">{body}</li>
      <li className="list-group-item list-group-item-info">{email}</li>
    </>
  );
};
