import React from 'react';

export const CommentInfo:React.FC<PostComment> = ({
  name,
  body,
  email,
}) => (
  <>
    <h3 className="comment__person">{name}</h3>
    <p className="comment__email">{email}</p>
    <p className="comment__body">{body}</p>
  </>
);
